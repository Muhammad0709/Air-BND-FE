import { Card, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Box } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import HotelIcon from '@mui/icons-material/Hotel'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AdminLayout from '../../components/admin/AdminLayout'

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Bookings', value: '1,234', icon: DashboardIcon, color: '#FF8C75', change: '+12%' },
    { title: 'Total Users', value: '5,678', icon: PeopleIcon, color: '#4F46E5', change: '+8%' },
    { title: 'Properties', value: '890', icon: HotelIcon, color: '#10B981', change: '+5%' },
    { title: 'Revenue', value: '$125K', icon: TrendingUpIcon, color: '#F59E0B', change: '+15%' },
  ]

  const recentBookings = [
    { id: 1, guest: 'John Doe', property: 'Luxury Beachfront Villa', checkin: '2025-01-15', checkout: '2025-01-20', status: 'Confirmed', amount: '$1,495' },
    { id: 2, guest: 'Jane Smith', property: 'Modern Apartment', checkin: '2025-01-18', checkout: '2025-01-22', status: 'Pending', amount: '$899' },
    { id: 3, guest: 'Mike Johnson', property: 'Cozy Studio', checkin: '2025-01-20', checkout: '2025-01-25', status: 'Confirmed', amount: '$625' },
    { id: 4, guest: 'Sarah Williams', property: 'Luxury Beachfront Villa', checkin: '2025-01-22', checkout: '2025-01-28', status: 'Confirmed', amount: '$1,794' },
    { id: 5, guest: 'David Brown', property: 'Modern Apartment', checkin: '2025-01-25', checkout: '2025-01-30', status: 'Cancelled', amount: '$899' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return '#10B981'
      case 'Pending': return '#F59E0B'
      case 'Cancelled': return '#EF4444'
      default: return '#6B7280'
    }
  }

  return (
    <AdminLayout title="Dashboard">
            {/* Stats Cards */}
            <Row className="g-3 mb-4">
              {stats.map((stat, idx) => (
                <Col key={idx} xs={12} sm={6} lg={3}>
                  <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
                    <CardContent>
                      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: `${stat.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <stat.icon sx={{ color: stat.color, fontSize: 24 }} />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#10B981',
                            fontWeight: 700,
                            bgcolor: '#ECFDF5',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1
                          }}
                        >
                          {stat.change}
                        </Typography>
                      </Stack>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', mb: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6B7280' }}>
                        {stat.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Recent Bookings Table */}
            <Row>
              <Col xs={12}>
                <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
                  <CardContent>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
                        Recent Bookings
                      </Typography>
                      <Button
                        variant="outlined"
                        startIcon={<SearchIcon />}
                        sx={{
                          borderColor: '#D0D5DD',
                          color: '#344054',
                          textTransform: 'none',
                          borderRadius: 2,
                          '&:hover': { borderColor: '#D0D5DD', bgcolor: '#F9FAFB' }
                        }}
                      >
                        Search
                      </Button>
                    </Stack>

                    <TableContainer sx={{ overflowX: 'auto', maxWidth: '100%', WebkitOverflowScrolling: 'touch' }}>
                      <Table sx={{ minWidth: 650, width: '100%' }}>
                        <TableHead>
                          <TableRow sx={{ bgcolor: '#F9FAFB' }}>
                            <TableCell sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Guest</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Property</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Check-in</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Check-out</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {recentBookings.map((booking) => (
                            <TableRow key={booking.id} sx={{ '&:hover': { bgcolor: '#F9FAFB' } }}>
                              <TableCell>{booking.guest}</TableCell>
                              <TableCell>{booking.property}</TableCell>
                              <TableCell>{booking.checkin}</TableCell>
                              <TableCell>{booking.checkout}</TableCell>
                              <TableCell>
                                <Box
                                  sx={{
                                    display: 'inline-block',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                    bgcolor: `${getStatusColor(booking.status)}15`,
                                    color: getStatusColor(booking.status),
                                    fontWeight: 600,
                                    fontSize: 12
                                  }}
                                >
                                  {booking.status}
                                </Box>
                              </TableCell>
                              <TableCell sx={{ fontWeight: 700, color: '#111827' }}>{booking.amount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Col>
            </Row>
    </AdminLayout>
  )
}

