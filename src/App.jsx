import { useState } from 'react'
import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UseView from './features/user/UseView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UseView />
    </>
  )
}

export default App
