'use client';
import { globals } from './styles/styles';
import Header from './components/header';
import Journal from './components/journal';
import Logs from './components/logs';
import { useState } from 'react';

export default function Home() {

  // refresh state for updating the logs panel.
  const [refreshLogs, setRefreshLogs] = useState<boolean>(false);

  return (
    <main style={globals.global}>
      <Header />
      <Journal setRefreshLogs={setRefreshLogs} refreshLogs={refreshLogs} />
      <Logs refreshExternal={refreshLogs} />
    </main>
  )
}
