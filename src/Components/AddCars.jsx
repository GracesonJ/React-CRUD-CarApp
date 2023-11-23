import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};

function AddCars() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button style={{color:'white' }} onClick={handleOpen}>Add Cars</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='text-center mb-1' id="modal-modal-title" variant="h6" component="h1">
            Enter Car Details
          </Typography>
          <div className="">
            <label htmlFor="projectPic" className='text-center  justify-content-center d-flex'>
                <input  type="file" id='projectPic' style={{display:'none'}} />
                <img width={'300px'} height={'150px'} src={"https://image.pngaaa.com/768/791768-middle.png"} alt="Add Car Image" />
              </label>
          </div>
          <div className='mt-3 '><TextField fullWidth id="filled-basic" label="Car Name" variant="filled" /></div>
          <div className='mt-3 '><TextField fullWidth id="filled-basic" label="Make & Model" variant="filled" /></div>
          <div className='mt-3 '><TextField fullWidth id="filled-basic" label="Expected Rate" variant="filled" /></div>
          <div className='mt-3 '><TextField fullWidth id="filled-basic" label="Overview" variant="filled" /></div>
          <Stack className='mt-3' spacing={28} direction="row">
            <Button color="error" onClick={handleClose} variant="contained">Cancel</Button>
            <Button variant="outlined">Add Car</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default AddCars