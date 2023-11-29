'use client';
import { globals } from './styles/styles';
import Header from './components/header';
import Journal from './components/journal';
import Logs from './components/logs';
import Weather from './components/weather';
import LogView from './components/logview';
import { useState } from 'react';

export default function Home() {

  // refresh state for updating the logs panel.
  const [refreshLogs, setRefreshLogs] = useState<boolean>(false);
  const [pageState, setPageState] = useState<String>("Home")

  return (
    <main style={globals.global}>
      <Header setPageState={setPageState} />
      {



        // home page components, default page layout
        pageState === "Home" ? 
        <>
          <Journal setRefreshLogs={setRefreshLogs} refreshLogs={refreshLogs} />
          <Logs refreshExternal={refreshLogs} setPageState={setPageState} />
        </>
        
        

        // page layout if weather is selected
        :  pageState === "Weather" ?
        <>
          <Weather />
        </>



        // page layout if viewing a log
        : pageState === "DetailView" ?
        <>
          <LogView />
          <Logs refreshExternal={refreshLogs} setPageState={setPageState}/>
        </>
        
        
        :
        <></>
      }
    </main>
  )
}
