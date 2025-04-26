import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/style.css'
import TopBar from './components/TopBar'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Cau 1 */}
      <TopBar />
      {/* Cau 2 */}
      <Header />
    </div>
  )
}

export default App
