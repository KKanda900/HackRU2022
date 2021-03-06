import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { Chart } from "react-google-charts";
import { db } from '../../../../firebase';

var curr_user = window.sessionStorage.getItem("CurrUser")
var curr_user_json = JSON.parse(curr_user)
console.log(curr_user_json)

export const data_1 = [
    ["Date", "Patient Requests"],
    ["4/2/22", 3],
    ["4/3/22", 5],
    ["4/4/22", 10],
    ["4/5/22", 8],
];

export const options_1 = {
    title: "Patients Requests Overview",
    curveType: "function",
    legend: { position: "bottom" },
};

export const data = [
    ["Gender", "Number of Patients"],
    ["Female", 110],
    ["Male", 20]
];

export const options = {
    title: "Patients Gender",
};

export const Content = () => {
    const [value, onChange] = useState(new Date());
    const [val, setValue] = useState(false)

    const [users, setUsers] = useState([]);

    var curr_user = null

    useEffect(
        () =>
            onSnapshot(query(collection(db, "Users"), orderBy("username", "desc")),
                (snapshot) => {
                    setUsers((users) => snapshot.docs);
                }),
        []
    );

    for(var i = 0; i <= users.length-1; i++) {
        console.log(users[i].data())
        if(curr_user_json.username === users[i].data().username) {
            curr_user = users[i].data()
        }
    }

    console.log(curr_user)

    return (
        <div class='grid grid-cols-3'>
            <div class='col-span-2'>
                <h3>Overview Of Patients</h3>
                {curr_user_json.patient ? (
                <>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data_1}
                        options={options_1}
                    />
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />{/*  */}
                </>
                ): (
                    <>
                    </>
                )}
            </div>
            <div>
                <h3>Scheduling</h3>
                <Calendar onClickDay={() => setValue(!val)} onChange={onChange} value={value} />
                {val ? (
                    <>
                        <div className='mt-9 ml-33'>
                            <h1 className='text-3xl'>Scheduling Information</h1>
                            <p>Type: Dental Cleaning</p>
                            <p>Patient: Wendy Lucy</p>
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
    )
}
