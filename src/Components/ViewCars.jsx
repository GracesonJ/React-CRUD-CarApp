import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body closeButton>
        <Card style={{ width: '45rem' }}  className='m-4 border shadow'>
            
        <Row>
            <Typography className='text-center mt-3' gutterBottom variant="h4" component="div">
                      Car Name
            </Typography>
            <Col className='mt-5'>
                <CardMedia className=' mx-2 rounded shadow' 
                component="img"
                alt="green iguana"
                height="230"
                image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?tr=w-456"/>
            </Col>
            <Col>
                <CardContent>
                    <div variant="body2" color="text.secondary"  className='m-4 p-2 shadow'>
                      <h6>2018 model swift car</h6>
                    </div>
                    <div variant="body2" color="text.secondary"  className='m-4 p-2 shadow'>
                      <h6>Model</h6>
                    </div>
                    <div variant="body2" color="text.secondary"  className='m-4 p-2 shadow'>
                      <h6>Rate</h6>
                    </div>
                    <div variant="body2" color="text.secondary" className='m-4 p-2 shadow'>
                      <h6>Overview</h6>
                    </div>
                </CardContent>
            </Col>
        </Row> 
        </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ViewCars() {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
        <Button size="small"  variant="outlined" onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default ViewCars
