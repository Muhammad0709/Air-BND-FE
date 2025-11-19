import { useState } from 'react'
import { Box, Breadcrumbs, Button, FormControl, InputAdornment, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container as RBContainer, Row, Col } from 'react-bootstrap'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { useNavigate, Link } from 'react-router-dom'
import p1 from '../assets/images/payment-1.svg'
import p2 from '../assets/images/payment-2.svg'
import p3 from '../assets/images/payment-3.svg'
import img1 from '../assets/images/popular-stay-1.svg'
import ListingPreviewCard from '../components/ListingPreviewCard'
import BookingSummaryCard from '../components/BookingSummaryCard'

export default function Booking() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCode: '+31',
    guests: 1,
    paymentMethod: 'ideal',
    cardNumber: '',
    expiryDate: '',
    csv: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    navigate('/confirmation')
  }
  return (
    <Box>
      <Navbar />
      <Box className="booking-page">
        <RBContainer>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#6B7280', mb: 2 }}>
            <Typography 
              component={Link} 
              to="/" 
              color="#111827" 
              fontWeight={700}
              sx={{ textDecoration: 'none', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            >
              Home
            </Typography>
            <Typography color="#6B7280">
              Search
            </Typography>
            <Typography color="#6B7280">Luxury Beachfront Villa Luxury Beachfront Vi</Typography>
          </Breadcrumbs>

          <Typography className="booking-title">Enter booking details</Typography>

          <Row>
            <Col xs={12} md={7} lg={8}>
              <Paper elevation={0} className="booking-form">
                <Typography className="section-title">Enter your personal info</Typography>

                <form onSubmit={handleSubmit}>
                <Box className="field">
                  <Typography className="label">Name</Typography>
                  <TextField 
                    size="small" 
                    placeholder="" 
                    fullWidth 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </Box>

                <Box className="field">
                  <Typography className="label">Guest</Typography>
                  <FormControl fullWidth size="small">
                    <Select 
                      value={formData.guests} 
                      displayEmpty
                      onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
                    >
                      {[1,2,3,4,5,6,7,8].map((g) => (
                        <MenuItem key={g} value={g}>{g} guest{g>1?'s':''}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box className="field">
                  <Typography className="label">Email</Typography>
                  <TextField 
                    size="small" 
                    placeholder="example@gmail.com" 
                    fullWidth 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </Box>

                <Box className="field">
                  <Typography className="label">Phone Number</Typography>
                  <Stack direction="row" spacing={1.5}>
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                      <Select 
                        value={formData.phoneCode}
                        onChange={(e) => setFormData({...formData, phoneCode: e.target.value})}
                      >
                        {['+31','+44','+1','+92'].map((c) => (
                          <MenuItem key={c} value={c}>{c}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField 
                      size="small" 
                      fullWidth 
                      placeholder="" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </Stack>
                  <Typography className="help">We will only contact you about your booking</Typography>
                </Box>

                <Typography className="section-title" sx={{ mt: 1.5 }}>Choose your payment method</Typography>
                <Box className="pay-tabs">
                  <Button 
                    variant="outlined" 
                    className={`pay-tab ${formData.paymentMethod === 'ideal' ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, paymentMethod: 'ideal'})}
                  >
                    <Box className="pay-vert">
                      <Box component="img" src={p1} alt="iDEAL" className="pay-icon" />
                      <Typography className="pay-label">iDEAL</Typography>
                    </Box>
                  </Button>
                  <Button 
                    variant="outlined" 
                    className={`pay-tab ${formData.paymentMethod === 'creditcard' ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, paymentMethod: 'creditcard'})}
                  >
                    <Box className="pay-vert">
                      <Box component="img" src={p2} alt="Creditcard" className="pay-icon" />
                      <Typography className="pay-label">Creditcard</Typography>
                    </Box>
                  </Button>
                  <Button 
                    variant="outlined" 
                    className={`pay-tab ${formData.paymentMethod === 'paypal' ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, paymentMethod: 'paypal'})}
                  >
                    <Box className="pay-vert">
                      <Box component="img" src={p3} alt="PayPal" className="pay-icon" />
                      <Typography className="pay-label">PayPal</Typography>
                    </Box>
                  </Button>
                </Box>

                <Typography className="section-title" sx={{ mt: 0.5 }}>Card info</Typography>
                <Box className="field">
                  <Typography className="label">Card Number</Typography>
                  <TextField 
                    size="small" 
                    fullWidth 
                    placeholder="" 
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                    InputProps={{ startAdornment: <InputAdornment position="start"><CreditCardIcon sx={{ color: '#9CA3AF' }} /></InputAdornment> }} 
                  />
                </Box>

                <Stack direction="row" spacing={1.5} className="field">
                  <Box sx={{ flex: 1 }}>
                    <Typography className="label">Expiry Date</Typography>
                    <TextField 
                      size="small" 
                      fullWidth 
                      placeholder="dd/mm/yyyy" 
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography className="label">CSV/SVC</Typography>
                    <TextField 
                      size="small" 
                      fullWidth 
                      placeholder="123" 
                      value={formData.csv}
                      onChange={(e) => setFormData({...formData, csv: e.target.value})}
                    />
                  </Box>
                </Stack>

                <Paper elevation={0} className="booking-total">
                  <Typography>Total</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography className="grand-total">$631</Typography>
                    <Button type="submit" variant="contained" className="request-btn">Request to Book</Button>
                  </Stack>
                </Paper>
                </form>
              </Paper>
            </Col>

            <Col xs={12} md={5} lg={4}>
              <ListingPreviewCard image={img1} title="Luxury Beachfront Villa Luxury Beachfront Vi" location="Malibu, California" reviews={123} rating={4} />

              <BookingSummaryCard
                rules={[
                  'Check-in: 3:00 PM - 10:00 PM',
                  'Check-out: 11:00 AM',
                  'No parties or events allowed',
                  'Pets allowed (with prior notification)',
                  'No smoking indoors',
                ]}
                costs={[
                  { label: '$87 × 7 nights', amount: '$585' },
                  { label: 'Cleaning fee', amount: '$25' },
                  { label: 'Service fee', amount: '$71' },
                ]}
                totalAmount="$631"
              />
            </Col>
          </Row>
        </RBContainer>
      </Box>
      <Footer />
    </Box>
  )
}


