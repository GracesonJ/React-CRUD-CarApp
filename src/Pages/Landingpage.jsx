import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Components/Login'
import Header from '../Components/Header'

function Landingpage() {
  const navigateByUrl = useNavigate()
  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
    <Header/>
      <div className="container d-flex align-items-center justify-content-center mt-5" >
        <div className="content flex-column mt-5"style={{width:'60%'}} >
          <div className="heading">
              <h2>Welcome to <span style={{color:"red", fontSize:"60px"}}>G-Cars World</span></h2>
              <Login/>
          </div>
        </div>
        <div className="image" style={{width:'60%'}}>
          <img className="img-fluid" style={{width:'50%', marginLeft:"120px"}} src="https://media.tenor.com/B9KijlkW9kcAAAAj/car-ride.gif" alt="image" />
        </div>
      </div>
    </>
  )
}

export default Landingpage