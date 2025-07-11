import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import client from 'socket.io_client';

const socket = client.io('http://localhost:3000/')
function App(){
  const[count, setCount]= useState(0)

  return (
    Div class="card"
   button onClick={()=> setCount((count)=>)}
  
        
     
   
  )
}
