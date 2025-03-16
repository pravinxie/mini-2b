import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import HomePage from './HomePage/HomePage.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'
import SignupPage from './SignupPage/SignupPage.jsx'
import FindDoctorsNearMe from './FindDoctorsNearMe/FindDoctorsNearMe.jsx'
import DiseaseExtraction from './DiseaseExtraction/DiseaseExtraction.jsx'
import DiseaseExtraction_2 from './DiseaseExtraction_2/DiseaseExtraction_2.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<SignupPage/>} />
      <Route path='FindDoctorsNearMe' element={<FindDoctorsNearMe/>} />
      {/* <Route path='DiseaseExtraction' element={<DiseaseExtraction/>} /> */}
      <Route path='DiseaseExtraction_2' element={<DiseaseExtraction_2/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

