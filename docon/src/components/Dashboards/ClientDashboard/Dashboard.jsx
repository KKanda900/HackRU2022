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

    return (
        <Container>
            <UserNavBar />
            <div class='grid grid-cols-3 pt-10'>
                <div class='col-span-2'>
                    <h3>Overview of {curr_user_json.full_name}</h3>
                    <p className='mt-4'>Doctor: {curr_user_json.doctor_name ? (curr_user_json.doctor_name) : (
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong class="font-bold">Find A Doctor Now! </strong>
                            <span class="block sm:inline">Use Our Request Feature</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                            </span>
                        </div>
                    )}</p>
                    {curr_user_json.doctor_name ?
                        (
                            <>
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
                            </>
                        ) : (
                            <>

                            </>
                        )

                    }
                </div>
                <div>
                    <h3>Appointments</h3>
                    <Calendar onClickDay={() => setValue(!val)} onChange={onChange} value={value} />
                    {val ? (
                        <>
                            <div className='mt-9 ml-33'>
                                <h1 className='text-3xl'>Appointment Information</h1>
                                <p>Type: Dental Cleaning</p>
                                <p>Doctor: {curr_user_json.doctor_name ? (curr_user_json.doctor_name) : ("Doctor Vu")}</p>
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
