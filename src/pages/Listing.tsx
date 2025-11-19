import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedCard from '../components/FeaturedCard'
import { Container as RBContainer, Row, Col } from 'react-bootstrap'
import { Box, Breadcrumbs, Checkbox, Divider, IconButton, InputAdornment, MenuItem, Paper, Select, Slider, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import img1 from '../assets/images/popular-stay-1.svg'
import img2 from '../assets/images/popular-stay-2.svg'
import img3 from '../assets/images/popular-stay-3.svg'

type Item = { image: string; title: string; location: string; price: number }

const allItems: Item[] = [
  { image: img1, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
  { image: img2, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
  { image: img3, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
  { image: img1, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
  { image: img2, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
  { image: img3, title: 'Luxury Beachfront Villa Luxury Beachfront', location: 'Malibu, California', price: 299 },
]

export default function Listing() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [price, setPrice] = useState<number>(100)
  const [guests, setGuests] = useState<number>(1)

  const filtered = useMemo(() => {
    if (!search) return allItems
    return allItems.filter((i) => i.title.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <Box>
      <Navbar />
      <Box className="listing-page">
        <RBContainer>
          {/* Breadcrumbs */}
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
            <Typography color="#6B7280">Search</Typography>
          </Breadcrumbs>

          <Row>
            {/* Sidebar Filters */}
            <Col xs={12} md={3}>
              <Paper className="filter-card" elevation={0}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography className="filter-title">Filters</Typography>
                  <IconButton size="small"><ExpandMoreIcon /></IconButton>
                </Stack>
                <Divider sx={{ mb: 2 }} />

                {/* Location */}
                <Typography className="filter-group">Location</Typography>
                <Stack spacing={1} sx={{ mb: 2 }}>
                  {[
                    ['North America', 4],
                    ['South America', 6],
                    ['Africa', 8],
                    ['Rhodium', 1],
                    ['Iridium', 1],
                  ].map(([label, count]) => (
                    <Stack key={label as string} direction="row" alignItems="center" justifyContent="space-between" className="check-row">
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <Checkbox size="small" />
                        <Typography className="check-label">{label as string}</Typography>
                      </Stack>
                      <Typography className="check-count">{count as number}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Typography className="filter-group">Price Range</Typography>
                <Box sx={{ px: 1 }}>
                  <Slider size="small" value={price} onChange={(_, v) => setPrice(v as number)} min={0} max={100}
                          valueLabelDisplay="off" className="price-slider" />
                  <Stack direction="row" justifyContent="space-between" sx={{ color: '#9CA3AF', fontSize: 12, mt: -1, mb: 2 }}>
                    <span>100$</span>
                    <span>1000$</span>
                  </Stack>
                </Box>

                <Typography className="filter-group">Checkin / Checkout</Typography>
                <Box className="mini-calendar">
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <IconButton size="small"><RemoveIcon fontSize="small" /></IconButton>
                    <Typography className="cal-month">Aug 2025</Typography>
                    <IconButton size="small"><AddIcon fontSize="small" /></IconButton>
                  </Stack>
                  <Box className="cal-grid">
                    {['Su','Mo','Tu','We','Th','Fr','Sa',
                      '27','28','29','30','31','1','2',
                      '3','4','5','6','7','8','9',
                      '10','11','12','13','14','15','16',
                      '17','18','19','20','21','22','23',
                      '24','25','26','27','28','29','30'].map((d, idx) => (
                      <span key={idx} className={`cal-cell${isNaN(parseInt(d)) ? ' head' : ''}`}>{d}</span>
                    ))}
                  </Box>
                </Box>

                <Typography className="filter-group">Guest</Typography>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <IconButton size="small" className="guest-btn" onClick={() => setGuests((g) => Math.max(1, g - 1))}><RemoveIcon fontSize="small" /></IconButton>
                  <Box className="guest-count">{guests}</Box>
                  <IconButton size="small" className="guest-btn" onClick={() => setGuests((g) => g + 1)}><AddIcon fontSize="small" /></IconButton>
                </Stack>

                <Typography className="filter-group">Amenities</Typography>
                <Stack spacing={1} sx={{ mb: 1.5 }}>
                  {[
                    ['WiFi', 4],
                    ['Parking', 6],
                    ['Pool', 9],
                    ['AC', 1],
                    ['Pet-Friendly', 0],
                    ['Kitchen', 0],
                    ['Balcony', 0],
                    ['Gym', 0],
                  ].map(([label, count], i) => (
                    <Stack key={`${label}-${i}`} direction="row" alignItems="center" justifyContent="space-between" className="check-row">
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <Checkbox size="small" />
                        <Typography className="check-label">{label as string}</Typography>
                      </Stack>
                      <Typography className="check-count">{count as number}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Col>

            {/* Content */}
            <Col xs={12} md={9}>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'stretch', sm: 'center' }} spacing={2} sx={{ mb: 2 }}>
                <Typography className="results-text">Showing 1-9 of {filtered.length} results</Typography>
                <Stack direction="row" spacing={1.5} flex={1} sx={{ maxWidth: 560, ml: { sm: 'auto' } }}>
                  <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search"
                    size="small"
                    fullWidth
                    className="listing-search"
                    InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment> }}
                  />
                  <Select size="small" value={sortBy} onChange={(e) => setSortBy(e.target.value)} sx={{ minWidth: 170 }} className="listing-sort">
                    <MenuItem value="featured">Sort by: Featured</MenuItem>
                    <MenuItem value="price_low">Price: Low to High</MenuItem>
                    <MenuItem value="price_high">Price: High to Low</MenuItem>
                  </Select>
                </Stack>
              </Stack>

               <Row className="g-3">
                 {filtered.map((i, idx) => (
                   <Col key={idx} xs={12} md={6} lg={6}>
                     <FeaturedCard image={i.image} title={i.title} location={i.location} price={i.price} id={idx + 1} />
                   </Col>
                 ))}
               </Row>
            </Col>
          </Row>
        </RBContainer>
      </Box>
      <Footer />
    </Box>
  )
}


