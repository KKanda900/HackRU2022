import React from 'react'
import { Container } from 'react-bootstrap'
import UserNavBar from './UserNavBar'
import Calendar from 'react-calendar'
import { Chart } from "react-google-charts";
import { useState } from "react"

var curr_user = window.sessionStorage.getItem("CurrUser")
var curr_user_json = JSON.parse(curr_user)
console.log(curr_user_json)

export const data_1 = [
    ["Date", "Weight"],
    ["4/2/22", 100],
    ["4/3/22", 200],
    ["4/4/22", 250],
    ["4/5/22", 100],
];

export const data_2 = [
    ["Date", "Blood Pressure"],
    ["4/2/22", 100 / 98],
    ["4/3/22", 200 / 94],
    ["4/4/22", 250 / 94],
    ["4/5/22", 100 / 94],
];

export const options_1 = {
    title: "Weight Overview",
    curveType: "function",
    legend: { position: "bottom" },
};

export const options_2 = {
    title: "Blood Pressure Overview",
    curveType: "function",
    legend: { position: "bottom" },
};

export const Dashboard = () => {
    const [value, onChange] = useState(new Date());
    const [val, setValue] = useState(false)

    const clickDate = async (e) => {

    }

    return (
        <Container>
            <UserNavBar />
            <div class='grid grid-cols-3 pt-10'>
                <div class='col-span-2'>
                    <h3>Overview of {curr_user_json.full_name}</h3>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data_1}
                        options={options_1}
                    />
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data_2}
                        options={options_2}
                    />
                </div>
                <div>
                    <h3>Appointments</h3>
                    <Calendar onClickDay={() => setValue(!val)} onChange={onChange} value={value} />
                    {val ? (
                        <>
                            <div className='mt-9 ml-33'>
                                <h1 className='text-3xl'>Appointment Information</h1>
                                <p>Type: Dental Cleaning</p>
                                <p>Doctor: Doctor Vu</p>
                                <p>Day: </p>
                                <p>Time: 3:00pm</p>
                            </div>
                        </>
                            ) : (
                            <>

                            </>
                            )
                
                    }
                        </div>
            </div>
        </Container>
    )
}
