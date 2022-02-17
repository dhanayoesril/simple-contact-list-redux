import React from 'react'
import { AddKontak, ListKontak } from './components';

function App() {
  return (
    <div style={{padding: '30px'}}>
      <h2>Aplikasi Kontak App</h2>
      <AddKontak/>
      <hr/>
      <ListKontak/>
    </div>
  )
}

export default App;