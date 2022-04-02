import React from 'react'
import { Container } from 'react-bootstrap'

export const Form = () => {
    return (
        <Container>
            <div align='center'>
                <h3 class='font-railway'>Please Input Your Doctor Request Issue</h3>
                <textarea class="w-100 h-80 border-4 outline-black-100 outline-10 hover:outline-2 resize rounded-md caret-black"></textarea>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    <a href='#'>Contact Doctor</a>
                </button>
            </div>
        </Container>
    )
}
