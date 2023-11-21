import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Components/Header';


function Home() {
  return (
    <>
    <Header insideHome={true}/>
      <div className="m-5" >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?tr=w-456"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Car Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2018 model swift car
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Model : 2018
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Make : Maruthi
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">View Details</Button>
            <Button size="small" variant="outlined">Edit Details</Button>
            <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete</Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Home