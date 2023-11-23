import React from 'react'
import Header from '../Components/Header';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Col, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import ViewCars from '../Components/ViewCars';

function Home() {
  return (
    <>
    <Header insideHome={true}/>
    <div className="m-3" style={{paddingLeft:"60px"}}>

    <Row>
          <Col sm={12} md={6} lg={4}>
          <Card style={{ width: '21.3rem' }}  className='m-4 pb-2 border shadow'>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?tr=w-456"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Car Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2018 model swift car
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Model : 2018 Make : Maruthi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rate
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Overview
            </Typography>
          </CardContent>
          <CardActions>
            <div className='m-1' ><ViewCars/></div>
            <Button size="small" variant="outlined">Edit Details</Button>
            <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete</Button>
          </CardActions>
        </Card>
        </Col>
        
        </Row>
    </div>
      
    </>
  )
}

export default Home