import NavBar from './NavBar'
import Title from './Title'
import PitchText from './PitchText'
import React from 'react'
import Container from 'react-bootstrap/Container'

export default function HomePage() {
    return (
        <Container>
            <NavBar />
            <div align='center'>
                <Title />
            </div>
            <div class='content-start'>
                <PitchText />
            </div>
        </Container>
    )
}
