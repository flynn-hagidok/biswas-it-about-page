import './App.css'
import HeroSection from './components/HeroSection'
import MissionVision from './components/MissionVision'
import Navbar from './components/Navbar'
import OurStory from './components/OurStory'
import Stats from './components/Stats'
import TeamMembers from './components/TeamMembers'
import WorkProcess from './components/WorkProcess'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <OurStory />
        <MissionVision />
        <TeamMembers />
        <WorkProcess />
        <Stats />
      </main>
    </div>
  )
}

export default App
