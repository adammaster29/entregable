import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quotes from './complements/Quotes'
import quotes from './complements/quotes.json'
function App() {
  
  const  add = Math.floor(Math.random()* quotes.length)
const[counts, setCounts]= useState(add)

  const change=()=>{
    const  agg = Math.floor(Math.random()* quotes.length)
setCounts(agg)

  }


  const colors=["yellow","purple","blue","green","pink","black"]
  const color =Math.floor(Math.random()*colors.length)
  document.body.style = `background: ${colors[color]}`
  return (
    <div className="App" >
      <Quotes  colors={colors}  color={color} counts={counts} change={change}  />
    </div>
  )
}

export default App
