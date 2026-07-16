import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import StrategicSupport from './pages/StrategicSupport'
import AreasOfExpertise from './pages/AreasOfExpertise'
import HighQualityOrganization from './pages/HighQualityOrganization'
import EduPreneursAlliance from './pages/EduPreneursAlliance'
import AscendingEducator from './pages/AscendingEducator'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/strategic-support" element={<StrategicSupport />} />
      <Route path="/areas-of-expertise" element={<AreasOfExpertise />} />
      <Route path="/high-quality-organization" element={<HighQualityOrganization />} />
      <Route path="/edupreneurs-alliance" element={<EduPreneursAlliance />} />
      <Route path="/ascending-educator" element={<AscendingEducator />} />
    </Routes>
  )
}
