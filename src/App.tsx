import { useState } from 'react'
import axios from 'axios'

function App() {
  const login = async () => {
    await fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include'
    })

    alert('login')
  }

  const logout = async () => {
    await fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include'
    })

    alert('logout')
  }

  const connect = () => {
    const ws = new WebSocket('ws://localhost:3000/websocket')
    ws.onopen = () => {
      console.log('open')
      ws.send('foobar')
    }
  }

  return (
    <div className="App">
      <button onClick={login}>ログイン</button>
      <button onClick={logout}>ログアウト</button>
      <button onClick={connect}>WebSocket</button>
    </div>
  )
}

export default App
