import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SitesByCategory from './pages/SitesByCategory';
import Search from './components/Search'
import SearchResults from './pages/SearchResults'
import Articles from './pages/Articles'
import Loading from './components/Loading'
import { useMyContext } from './context/Store'
import Pagination from './components/Pagination' 
//import HistoricalSitesCard from './components/HistoricalSitesCard'
function App() {
  //const [count, setCount] = useState(0)
  const {loading, totalPage }= useMyContext()
  return (
    <>
    {loading && <Loading/>}
    <Header/>
    <Search/>
    {/*<HistoricalSitesCard/>*/}
    {/*<Footer/>*/}
    <main>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/historicalsites/:slug" element= {<SitesByCategory/>}/>
        <Route path="/search/:slug" element = {<SearchResults/>}/>
        <Route path="/article/:slug" element = {<Articles/>}/>
      </Routes>
    </main>
    <Pagination totalPage={totalPage}/>
    <Footer/>
    </>
  )
}

export default App
