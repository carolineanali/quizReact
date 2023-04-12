import { useState } from 'react'
import './App.css'
import quiz from './components/quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < quiz />
    </div>
  )
}

export default App