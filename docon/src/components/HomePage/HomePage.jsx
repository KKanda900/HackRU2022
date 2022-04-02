import NavBar from './NavBar'
import Title from './Title'
import PitchText from './PitchText'
import React from 'react'
import Container from 'react-bootstrap/Container'

export default function HomePage() {
    return (
        <Container>
            <NavBar />
            <div class='pt-10'>
                <Title />
            </div>
            <PitchText />
        </Container>
    )
}
