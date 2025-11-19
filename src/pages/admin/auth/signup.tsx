import { useState } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography, Link } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import logoUrl from '../../../assets/images/lipabnb-logo.svg'

export default function HostSignup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Host signup data:', formData)
    // Navigate to admin dashboard on successful signup
    navigate('/admin/dashboard')
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F9FAFB' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={5}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box component="img" src={logoUrl} alt="lipabnb" sx={{ height: 40, mb: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 1 }}>
                  Host Sign Up
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280' }}>
                  Create your host account to get started
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />

                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: '#FF8C75',
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: 16,
                      '&:hover': { bgcolor: '#ff7a61' }
                    }}
                  >
                    Sign Up
                  </Button>

                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant="body2" sx={{ color: '#6B7280' }}>
                      Already have an account?{' '}
                      <Link
                        component={RouterLink}
                        to="/admin/login"
                        sx={{
                          color: '#FF8C75',
                          fontWeight: 600,
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        Sign In
                      </Link>
                    </Typography>
                  </Box>
                </Stack>
              </form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </Box>
  )
}

