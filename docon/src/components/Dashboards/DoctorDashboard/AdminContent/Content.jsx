import React from 'react'
import Calendar from 'react-calendar'

export const Content = () => {
    return (
        <div class='grid grid-cols-3'>
            <div class='col-span-2'>
                <h3>Overview Of Patients</h3>
            </div>
            <div>
                <h3>Scheduling</h3>
                <Calendar/>
            </div>
        </div>
    )
}
