import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../AdminNavBar/AdminNavBar'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../../firebase'

export const ViewPatients = () => {
    var curr_user = window.sessionStorage.getItem("CurrUser")
    var curr_user_json = JSON.parse(curr_user)

    var patients = curr_user_json.patient
    console.log(patients)

    return (
        <Container>
            <NavBar />
            {
                patients.map(patient => (
                    <div class="justify-items-center bg-white shadow-md rounded px-8 pt-100 pb-8 mt-40">
                        <ul class="divide-y-2 divide-gray-100">
                            <li class="p-3">{patient.username}s Information:</li>
                            <ul>
                                <li>Patient's Name: {patient.full_name}</li>
                                <li>Patient's Gender: {patient.gender ? (patient.gender):("")}</li>
                                <li>Patient's Insurance Company: {patient.insurance_name}</li>
                                <li>Patient's Blood Test Report: <a href="#">Document</a></li>
                            </ul>
                        </ul>
                    </div>
                ))
            }
        </Container>
    )
}
