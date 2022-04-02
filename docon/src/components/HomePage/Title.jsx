import React from 'react'
import logo from '../../assets/health-care.svg'

export default function Title() {
    return (
        <div class="flex items-center">
            <div>
                <img src={logo}/>
            </div>
            <div>
                <strong>Andrew Alfred</strong>
                <span>Technical advisor</span>
            </div>
        </div>
    );
}
