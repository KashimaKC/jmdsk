'use client';
import { globals } from './styles/styles';
import Header from './components/header';
import Journal from './components/journal';
import Logs from './components/logs';
import Weather from './components/weather';
import { useState } from 'react';

export default function Home() {

  // refresh state for updating the logs panel.
  const [refreshLogs, setRefreshLogs] = useState<boolean>(false);
  const [pageState, setPageState] = useState<String>("Home")

  return (
    <main style={globals.global}>
      <Header setPageState={setPageState} />
      {
        pageState === "Home" ? 
        <>
          <Journal setRefreshLogs={setRefreshLogs} refreshLogs={refreshLogs} />
          <Logs refreshExternal={refreshLogs} />
        </> 
        :  pageState === "Weather" ?
        <>
          <Weather />
        </>
        : 
        <></>
      }
    </main>
  )
}
