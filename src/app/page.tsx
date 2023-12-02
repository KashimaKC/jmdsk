'use client';
import { globals } from './styles/styles';
import Header from './components/panes/header';
import Journal from './components/panes/journal';
import Logs from './components/panes/logs';
import Weather from './components/panes/weather';
import LogView from './components/panes/logview';
import Space from './components/panes/space';
import TodoList from './components/panes/todolist';
import { useState } from 'react';

export default function Home() {

  // refresh state for updating the logs panel.
  const [refreshLogs, setRefreshLogs] = useState<boolean>(false);
  const [pageState, setPageState] = useState<String>("Home")
  const [logView, setLogView] = useState<Object | any>()

  return (
    <main style={globals.global}>
      <Header setPageState={setPageState} />
      {



        // home page components, default page layout
        pageState === "Home" ? 
        <>
          <Journal setRefreshLogs={setRefreshLogs} refreshLogs={refreshLogs} />
          <Logs refreshExternal={refreshLogs} setPageState={setPageState} setLogView={setLogView} />
        </>
        
        

        // page layout if weather is selected
        :  pageState === "Weather" ?
        <>
          <Weather />
        </>



        // page layout if viewing a log
        : pageState === "DetailView" ?
        <>
          <LogView log={logView} setPageState={setPageState} />
          <Logs refreshExternal={refreshLogs} setPageState={setPageState} setLogView={setLogView}/>
        </>
        


        // page layout if viewing the todo list
        : pageState === "TodoList" ?
        <TodoList />
        

        
        // page layout if viewing the space tab
        : pageState === "Space" ?
        <Space />
        :
        <></>
      }
    </main>
  )
}
