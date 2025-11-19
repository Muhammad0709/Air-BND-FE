import { Box, Paper, Typography } from '@mui/material'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import locationIcon from '../assets/images/location.svg'

type FeaturedCardProps = {
  image: string
  title: string
  location: string
  price: number
  id?: number | string
}

export default function FeaturedCard({ image, title, location, price, id = 1 }: FeaturedCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/detail/${id}`)
  }

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/detail/${id}`)
  }

  return (
    <Paper className="tiles-card" elevation={0} sx={{ cursor: 'pointer' }} onClick={handleClick}>
      <Box className="tiles-image" onClick={handleImageClick} sx={{ cursor: 'pointer' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box className="tiles-body">
        <Typography className="tiles-title" component="h3" title={title}>{title}</Typography>
        <Box className="tiles-meta">
          <img src={locationIcon} alt="location" />
          <span>{location}</span>
        </Box>
        <Box className="tiles-row">
          <Box className="tiles-price">${price}<small>/ night</small></Box>
          <Box className="tiles-stars">★★★★★ <small>(123)</small></Box>
        </Box>
        <Button className="tiles-book-btn" type="button" onClick={(e) => { e.stopPropagation(); handleClick() }}>Book Now</Button>
      </Box>
    </Paper>
  )
}


