import { useState } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SendIcon from '@mui/icons-material/Send'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <Box>
      <Navbar />
      <Box className="contact-page">
        <Container>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 6, mt: 4 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#111827', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#6B7280', fontSize: '1.125rem', maxWidth: 600, mx: 'auto' }}>
              Get in touch with us. We're here to help and answer any questions you might have.
            </Typography>
          </Box>

          <Row className="g-4 justify-content-center">
            {/* Contact Form */}
            <Col xs={12} md={10} lg={8} xl={6}>
              <Paper elevation={0} sx={{ p: 4, border: '1px solid #E5E7EB', borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
                  Send us a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: '#111827', mb: 1, fontSize: '0.875rem' }}>
                        Name
                      </Typography>
                      <TextField
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        fullWidth
                        required
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#D0D5DD'
                            }
                          }
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography sx={{ fontWeight: 600, color: '#111827', mb: 1, fontSize: '0.875rem' }}>
                        Email
                      </Typography>
                      <TextField
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        fullWidth
                        required
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#D0D5DD'
                            }
                          }
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography sx={{ fontWeight: 600, color: '#111827', mb: 1, fontSize: '0.875rem' }}>
                        Subject
                      </Typography>
                      <TextField
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        fullWidth
                        required
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#D0D5DD'
                            }
                          }
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography sx={{ fontWeight: 600, color: '#111827', mb: 1, fontSize: '0.875rem' }}>
                        Message
                      </Typography>
                      <TextField
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        fullWidth
                        required
                        multiline
                        rows={6}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: '#D0D5DD'
                            }
                          }
                        }}
                      />
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<SendIcon />}
                      sx={{
                        bgcolor: '#FF8C75',
                        borderRadius: 2,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '1rem',
                        '&:hover': {
                          bgcolor: '#ff7a61'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Col>
          </Row>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

