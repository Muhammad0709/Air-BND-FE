import { useState } from 'react'
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, Switch, TextField, Typography } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import AdminLayout from '../../../components/admin/AdminLayout'
import Toast from '../../../components/admin/Toast'
import SaveIcon from '@mui/icons-material/Save'

export default function SystemSettings() {
  const [toastOpen, setToastOpen] = useState(false)
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'LipaBnb',
    siteEmail: 'admin@lipabnb.com',
    sitePhone: '+1 (555) 123-4567',
    siteAddress: '123 Main Street, City, State, ZIP',
    currency: 'USD',
    timezone: 'America/New_York',
    
    // Booking Settings
    bookingConfirmation: true,
    autoApproveBookings: false,
    cancellationPolicy: 'flexible',
    minBookingDays: 1,
    maxBookingDays: 30,
    
    // Payment Settings
    paymentMethod: 'stripe',
    taxRate: 8.5,
    serviceFee: 10
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Settings saved:', settings)
    // In real app: API call to save settings
    setToastOpen(true)
  }

  const handleToastClose = () => {
    setToastOpen(false)
  }

  return (
    <AdminLayout title="System Settings">
      <form onSubmit={handleSubmit}>
        {/* General Settings */}
        <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2, mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
              General Settings
            </Typography>
            <Row>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <TextField
                    label="Site Name"
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Site Email"
                    name="siteEmail"
                    type="email"
                    value={settings.siteEmail}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Phone Number"
                    name="sitePhone"
                    value={settings.sitePhone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Stack>
              </Col>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <TextField
                    label="Site Address"
                    name="siteAddress"
                    value={settings.siteAddress}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={2}
                  />
                  <FormControl fullWidth>
                    <InputLabel>Currency</InputLabel>
                    <Select
                      value={settings.currency}
                      onChange={(e) => handleSelectChange('currency', e.target.value)}
                      label="Currency"
                    >
                      <MenuItem value="USD">USD ($)</MenuItem>
                      <MenuItem value="EUR">EUR (€)</MenuItem>
                      <MenuItem value="GBP">GBP (£)</MenuItem>
                      <MenuItem value="PKR">PKR (₨)</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel>Timezone</InputLabel>
                    <Select
                      value={settings.timezone}
                      onChange={(e) => handleSelectChange('timezone', e.target.value)}
                      label="Timezone"
                    >
                      <MenuItem value="America/New_York">Eastern Time (ET)</MenuItem>
                      <MenuItem value="America/Chicago">Central Time (CT)</MenuItem>
                      <MenuItem value="America/Denver">Mountain Time (MT)</MenuItem>
                      <MenuItem value="America/Los_Angeles">Pacific Time (PT)</MenuItem>
                      <MenuItem value="Asia/Karachi">Pakistan Standard Time (PKT)</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Col>
            </Row>
          </CardContent>
        </Card>

        {/* Booking Settings */}
        <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2, mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
              Booking Settings
            </Typography>
            <Row>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.bookingConfirmation}
                        onChange={handleChange}
                        name="bookingConfirmation"
                      />
                    }
                    label="Require Booking Confirmation"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.autoApproveBookings}
                        onChange={handleChange}
                        name="autoApproveBookings"
                      />
                    }
                    label="Auto-Approve Bookings"
                  />
                  <FormControl fullWidth>
                    <InputLabel>Cancellation Policy</InputLabel>
                    <Select
                      value={settings.cancellationPolicy}
                      onChange={(e) => handleSelectChange('cancellationPolicy', e.target.value)}
                      label="Cancellation Policy"
                    >
                      <MenuItem value="flexible">Flexible</MenuItem>
                      <MenuItem value="moderate">Moderate</MenuItem>
                      <MenuItem value="strict">Strict</MenuItem>
                      <MenuItem value="non-refundable">Non-Refundable</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Col>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <TextField
                    label="Minimum Booking Days"
                    name="minBookingDays"
                    type="number"
                    value={settings.minBookingDays}
                    onChange={handleChange}
                    fullWidth
                    inputProps={{ min: 1 }}
                  />
                  <TextField
                    label="Maximum Booking Days"
                    name="maxBookingDays"
                    type="number"
                    value={settings.maxBookingDays}
                    onChange={handleChange}
                    fullWidth
                    inputProps={{ min: 1 }}
                  />
                </Stack>
              </Col>
            </Row>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2, mb: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827', mb: 3 }}>
              Payment Settings
            </Typography>
            <Row>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <FormControl fullWidth>
                    <InputLabel>Payment Method</InputLabel>
                    <Select
                      value={settings.paymentMethod}
                      onChange={(e) => handleSelectChange('paymentMethod', e.target.value)}
                      label="Payment Method"
                    >
                      <MenuItem value="stripe">Stripe</MenuItem>
                      <MenuItem value="paypal">PayPal</MenuItem>
                      <MenuItem value="bank">Bank Transfer</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Tax Rate (%)"
                    name="taxRate"
                    type="number"
                    value={settings.taxRate}
                    onChange={handleChange}
                    fullWidth
                    inputProps={{ min: 0, max: 100, step: 0.1 }}
                  />
                </Stack>
              </Col>
              <Col xs={12} md={6}>
                <Stack spacing={3}>
                  <TextField
                    label="Service Fee (%)"
                    name="serviceFee"
                    type="number"
                    value={settings.serviceFee}
                    onChange={handleChange}
                    fullWidth
                    inputProps={{ min: 0, max: 100, step: 0.1 }}
                  />
                </Stack>
              </Col>
            </Row>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{
              bgcolor: '#FF8C75',
              textTransform: 'none',
              borderRadius: 2,
              fontWeight: 700,
              px: 4,
              py: 1.5,
              '&:hover': { bgcolor: '#ff7a61' }
            }}
          >
            Save Settings
          </Button>
        </Box>
      </form>
      <Toast
        open={toastOpen}
        onClose={handleToastClose}
        message="Settings saved successfully!"
        severity="success"
      />
    </AdminLayout>
  )
}

