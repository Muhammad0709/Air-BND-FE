import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import ListingDetail from './pages/ListingDetail'
import Contact from './pages/Contact'
import ProfileSettings from './pages/ProfileSettings'
import Wishlist from './pages/Wishlist'
import AdminRoutes from './routes/AdminRoutes'
import HostRoutes from './routes/HostRoutes'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<SignIn />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/detail/:id" element={<ListingDetail />} />
      <Route path="/contact" element={<Contact />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/host/*" element={<HostRoutes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
