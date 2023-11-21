import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideHome}) {
  return (
    <>
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className="fw-bolder fs-4">
            <Link to={'/'} style={{textDecoration:"none"}}>
                <i className="fa-sharp fa-solid fa-cloud-arrow-up fa-bounce" ></i> {' '}
             <span style={{color:"red"}}>G-CARS</span>
            </Link>
          </Navbar.Brand>
        {
          insideHome &&
          <>
          <div className="m-3 d-flex gap-5">
            <Link className='btn btn-danger'>Add Cars</Link>
            <Link className='btn btn-danger'>View Cars</Link>
          </div>
          <Link className='btn btn-danger'>Logout</Link>

          </>
        }
        </Container>
      </Navbar>
    </>
  )
}

export default Header