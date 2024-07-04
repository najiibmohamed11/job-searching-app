import { useState } from 'react'
import JobCard from './components/Job Card/JobCard'
// import Jobs from './components/Jobs/Jobs'
import Header from './components/LandingPage/Header/Header'
import Hero from './components/LandingPage/HeroSection/Hero'
import Experience from './components/LandingPage/Experience/Experience'
import YourDreamJob from './components/LandingPage/YourDreamJob/YourDreamJob'
import Jobs from './components/Jobs/Jobs'
import FifeJobs from './components/LandingPage/FifeJops/FifeJobs'
import SeeMore from './components/SeeMore/SeeMore'
import ModalComponent from './components/Modal/Modal'
import { Route,Routes } from 'react-router-dom'
import Index from './components/LandingPage/index/Index'
import FindJob from "./components/LandingPage/FindJobPage/FindJobPage"
import Details from './components/details/Details'
import ScrollToTop from './components/scroll/ScrollToTop '
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop/>

    <Routes>

      
      <Route path="/" element={ <Index/>} />
      <Route path="/details/:id" element={ <Details/>} />
      <Route path='/findjop' element={<FindJob/>}/>

    </Routes>
   



    </>
  )
}

export default App
