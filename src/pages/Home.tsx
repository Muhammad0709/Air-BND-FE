import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import PopularStays from '../components/PopularStays'
import CtaReady from '../components/CtaReady'
import ChooseUs from '../components/ChooseUs'
import FeaturedCard from '../components/FeaturedCard'
import { Box, Button, TextField, MenuItem, Select, FormControl } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import img1 from '../assets/images/filter-1.svg'
import img2 from '../assets/images/filter-2.svg'
import img3 from '../assets/images/filter-3.svg'
import img4 from '../assets/images/filter-4.svg'
import img5 from '../assets/images/filter-5.svg'
import img6 from '../assets/images/filter-6.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('California')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('1')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('')
  }

  const items = [
    { image: img1, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
    { image: img2, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
    { image: img3, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
    { image: img4, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
    { image: img5, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
    { image: img6, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
  ]

  return (
    <div className="index-page">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Box className="hero-content">
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h1 className="hero-title">Find Your Perfect Stay, Anytime, Anywhere</h1>
                <p className="hero-subtitle">Discover a diverse selection of rentals, from cozy apartments to luxurious villas, tailored to your preferences.</p>
              </Col>
            </Row>
          </Box>
        </Container>

        {/* Search Form - Positioned at bottom */}
        <Box className="hero-search-wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Box className="hero-search-form">
                  <form className="search-form" onSubmit={handleSearch}>
                    <Box className="search-input-group">
                      <Box className="search-field">
                        <label htmlFor="destination">Destination</label>
                        <TextField
                          id="destination"
                          name="destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="Where are you going?"
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                          sx={{ '& .MuiInput-input': { border: 'none', padding: 0 } }}
                        />
                      </Box>
                      <Box className="search-field">
                        <label htmlFor="checkin">Checkin</label>
                        <TextField
                          id="checkin"
                          name="checkin"
                          type="date"
                          value={checkin}
                          onChange={(e) => setCheckin(e.target.value)}
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                          sx={{ '& .MuiInput-input': { border: 'none', padding: 0 } }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Box>
                      <Box className="search-field">
                        <label htmlFor="checkout">Checkout</label>
                        <TextField
                          id="checkout"
                          name="checkout"
                          type="date"
                          value={checkout}
                          onChange={(e) => setCheckout(e.target.value)}
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                          sx={{ '& .MuiInput-input': { border: 'none', padding: 0 } }}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Box>
                      <Box className="search-field">
                        <label htmlFor="guests">Guests</label>
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                          <Select
                            id="guests"
                            name="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            disableUnderline
                            sx={{ border: 'none', padding: 0, '&:before': { display: 'none' }, '&:after': { display: 'none' } }}
                          >
                            <MenuItem value="1">1 Guests</MenuItem>
                            <MenuItem value="2">2 Guests</MenuItem>
                            <MenuItem value="3">3 Guests</MenuItem>
                            <MenuItem value="4">4 Guests</MenuItem>
                            <MenuItem value="5">5+ Guests</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Button type="submit" className="search-button">
                        <SearchIcon sx={{ fontSize: '0.9rem' }} />
                        <span>Search</span>
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </section>

      <section className="featured-section">
        <Container>
          <h2 className="featured-heading">Featured Listings</h2>
          <p className="featured-sub">Book your perfect stay in just three simple steps</p>

          <Row className="g-3 mt-2">
            {items.map((i, idx) => (
              <Col key={idx} xs={12} sm={6} md={4}>
                <FeaturedCard image={i.image} title={i.title} location={i.location} price={i.price} id={idx + 1} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <HowItWorks />
      <PopularStays />
      <ChooseUs />
      <CtaReady />
      <Footer />
    </div>
  )
}


