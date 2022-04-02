import React from 'react'
import logo from '../../assets/health-care.svg'

export default function Title() {
    return (
        <div class="flex items-center">
            <img src={logo} class='pb-3' width='70px'/>
            <div>
                <h1 class='font-railway text-2xl'>Doc On</h1>
            </div>
        </div>
    );
}
