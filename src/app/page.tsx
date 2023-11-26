'use client';
import { globals } from './styles/styles';
import Header from './components/header';
import Journal from './components/journal';
import Logs from './components/logs';

export default function Home() {
  return (
    <main style={globals.global}>
      <Header />
      <Journal />
      <Logs />
    </main>
  )
}
