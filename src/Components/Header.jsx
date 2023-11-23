import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddCars from './AddCars'
function Header({insideHome}) {
  return (
    <>
    <Navbar className="bg-dark h">
        <Container>
          <Navbar.Brand className="fw-bolder fs-4">
            <Link to={'/'} style={{textDecoration:"none"}}>
             <span style={{color:"red"}}>G-CARS</span>
            </Link>
          </Navbar.Brand>
        {
          insideHome &&
          <>
            <div className='btn btn-danger '><i class="fa-solid fa-circle-plus"></i><AddCars/></div>
          <Link className='btn btn-danger'>Logout</Link>

          </>
        }
        </Container>
      </Navbar>
    </>
  )
}

export default Header