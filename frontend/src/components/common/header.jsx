import React from 'react'
import { Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Nav className='d-flex justify-content-center align-items-center' defaultActiveKey="/" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href='/myFlights' eventKey="link-1">My Flights</Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default Header
