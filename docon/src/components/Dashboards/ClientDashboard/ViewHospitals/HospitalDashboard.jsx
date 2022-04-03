import React from 'react'
import NavBar from '../UserNavBar'
import { TextField } from './TextField/TextField'
import { Container } from 'react-bootstrap'

export const HospitalDashboard = () => {
    return (
      <Container>
        <NavBar/> 
        <TextField/>
      </Container>
    )
}
