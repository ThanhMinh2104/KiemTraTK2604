import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/style.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import SidebarLeft from './components/SidebarLeft'
import NewsSection from './components/NewsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Cau 1 */}
      <TopBar />
      {/* Cau 2 */}
      <Header />
      {/* Cau3 */}
      <Navigation />
      {/* Cau4 */}
      <Banner />
      {/* Cau5 */}
      <SidebarLeft />
      {/* Cau6 */}
      <NewsSection />
    </div>
  )
}

export default App
