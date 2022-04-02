import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

export default function CardShowCase() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1590771998996-8589ec9b5ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <Card.Body>
                    <Card.Title>Live Longer.</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1603479394702-7dd40380a97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                <Card.Body>
                    <Card.Title>Live More.</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                <Card.Body>
                    <Card.Title>Stop Worrying.</Card.Title>

                </Card.Body>
            </Card>
        </CardGroup>
    )
}
