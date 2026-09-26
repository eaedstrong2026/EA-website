import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Founder from './pages/Founder'
import AscendingEducator from './pages/AscendingEducator'
import ConsultingServices from './pages/ConsultingServices'
import EduPreneursAlliance from './pages/EduPreneursAlliance'
import JoinTheAlliance from './pages/JoinTheAlliance'
import Sponsor from './pages/Sponsor'
import ApplyNow from './pages/ApplyNow'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/founder" element={<Founder />} />
      <Route path="/ascending-educator" element={<AscendingEducator />} />
      <Route path="/consulting-services" element={<ConsultingServices />} />
      <Route path="/edupreneurs-alliance" element={<EduPreneursAlliance />} />
      <Route path="/join-the-alliance" element={<JoinTheAlliance />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/apply" element={<ApplyNow />} />
    </Routes>
  )
}
