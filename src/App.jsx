import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {setCount(count+1)}
  return (
    <>
      <button onClick={incrementCount}>
        Ameena Jadallah {count}
      </button>
    </>
  )
}

export default App
