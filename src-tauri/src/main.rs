// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use mongodb::{
  bson::{Document, doc},
  sync::{Client, Collection}
};
use rand::seq::IteratorRandom;
use std::{fs, path::Path, io::Read};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      connect_db, test_db_log, select_random_image, submit_log, retrieve_logs, remove_log,
      retrieve_todo, modify_todo_status, create_task, remove_task
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// initializes the database connection and returns the collection if successful.
fn initialize_db_connection() -> Result<mongodb::sync::Collection<mongodb::bson::Document>, String> {
  let uri: &str = "mongodb://localhost:27017";
  let client: Client = Client::with_uri_str(uri).map_err(|e| e.to_string())?;
  let database: mongodb::sync::Database = client.database("jmdb");
  let my_coll: Collection<Document> = database.collection("logs");

  Ok(my_coll)
}

// initializes the database connection with the todo collection.
fn initialize_db_connection_todo() -> Result<mongodb::sync::Collection<mongodb::bson::Document>, String> {
  let uri: &str = "mongodb://localhost:27017";
  let client: Client = Client::with_uri_str(uri).map_err(|e| e.to_string())?;
  let database: mongodb::sync::Database = client.database("jmdb");
  let my_coll: Collection<Document> = database.collection("todo");

  Ok(my_coll)
}

#[tauri::command]
fn connect_db() -> Result<String, String> {
    let res: Result<Collection<Document>, String> = initialize_db_connection();
    
    match res {
      Ok(_) => {
        Ok("connection successful.".to_owned())
      },
      Err(_) => {
        Err("unable to connect.".to_owned())
      }
    }
}

#[tauri::command]
fn test_db_log() -> Result<String, String> {
    let res: Result<Collection<Document>, String> = initialize_db_connection();

    let col: Collection<Document> = res.unwrap();
    let ins_result: Result<mongodb::results::InsertOneResult, mongodb::error::Error> = col.insert_one(doc! {"test_data": "test_data"}, None);

    match ins_result {
      Ok(_) => {
        Ok("document created successfully".to_owned())
      },
      Err(_e) => {
        Err("unable to create document".to_owned())
      }
    } 
}

#[tauri::command]
fn submit_log(journal: String, date: String, time: String) -> Result<String, String> {
  let conn = initialize_db_connection();

  let col = conn.unwrap();
  let insert_res = col.insert_one(doc! {"date": date, "time": time, "entry": journal}, None);

  match insert_res {
    Ok(_) => {
      Ok("success".to_owned())
    },
    Err(_e) => {
      Err("unable to create document".to_owned())
    }
  }
}

#[tauri::command]
fn remove_log(date: String, time: String) -> Result<String, String> {
  let conn = initialize_db_connection();
  let col = conn.unwrap();

  let _cursor = col.find_one_and_delete(doc! 
    {"date": date, "time": time}, None)
    .expect("could not remove document");

  Ok("success".to_owned())
}

#[tauri::command]
fn retrieve_logs() -> Result<String, String> {
  let conn: Result<Collection<Document>, String> = initialize_db_connection();
  let col: Collection<Document> = conn.unwrap();

  let cursor: mongodb::sync::Cursor<Document> = col.find(doc! {},None).expect("failed to run query");

  let documents: Result<Vec<Document>, mongodb::error::Error> = cursor.collect::<Result<Vec<_>, _>>();
  let json: Result<String, serde_json::Error> = serde_json::to_string(&documents.unwrap());

  Ok(json.unwrap())
}

#[tauri::command]
fn select_random_image() -> String {

  
  let mut rng = rand::thread_rng();

  let top_dir = fs::read_dir("./CardData/").unwrap(); // read the top directory
  let char = top_dir.choose(&mut rng).unwrap().unwrap();  // choose a random character directory
  
  let char_dir = fs::read_dir(char.path().display().to_string()).unwrap();  // read random character directory from above
  let card = char_dir.choose(&mut rng).unwrap().unwrap(); // choose random card directory

  let image_path = format!("{}/{:?}_card_idolized_image.png", card.path().display(), card.file_name().as_os_str()).replace("\"", "").replace("\\", "/");

  if let Ok(mut file) = fs::File::open(&Path::new(&image_path)) {
    let mut buffer = Vec::new();
    if let Ok(_) = file.read_to_end(&mut buffer) {
      let image: String = base64::encode(buffer);

      return image;

    } else {
      return "failed to read image file.".into()
    }
  } else {
    return "failed".into()
  }
}

#[tauri::command]
fn retrieve_todo() -> Result<String, String> {
  let conn: Result<Collection<Document>, String> = initialize_db_connection_todo();
  let col: Collection<Document> = conn.unwrap();

  let cursor = col.find(doc! {}, None).expect("failed to run query");

  let documents: Result<Vec<Document>, mongodb::error::Error> = cursor.collect::<Result<Vec<_>, _>>();
  let json: Result<String, serde_json::Error> = serde_json::to_string(&documents.unwrap());

  Ok(json.unwrap())
}

#[tauri::command]
fn modify_todo_status(new_type: String, date: String, time: String) -> Result<String, String> {
  let conn = initialize_db_connection_todo();
  let col = conn.unwrap();

  let _result = col.update_one(doc! {"date": date, "time": time}, doc! {"$set": {"type": new_type}}, None).expect("failed");

  Ok("success".to_owned())
}

#[tauri::command]
fn create_task(
  new_type: String, 
  task: String, 
  time: String, 
  date: String,
  priority: String) -> Result<String, String> {

  let conn: Result<Collection<Document>, String> = initialize_db_connection_todo();
  let col: Collection<Document> = conn.unwrap();
  let insert_res: Result<mongodb::results::InsertOneResult, mongodb::error::Error> = col.insert_one(doc! {
    "time": time,
    "date": date,
    "type": new_type,
    "task": task,
    "priority": priority
  }, None);

  match insert_res {
    Ok(_) => {
      Ok("success".to_owned())
    },
    Err(_e) => {
      Err("unable to create document".to_owned())
    }
  }
}

#[tauri::command]
fn remove_task(time: String, date:String) -> Result<String, String> {
  let conn = initialize_db_connection_todo();
  let col = conn.unwrap();
  let _result = col.find_one_and_delete(doc! {"time": time, "date": date}, None).expect("could not remove document");

  Ok("success".to_owned())
}