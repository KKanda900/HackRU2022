import { collection, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { Container, NavDropdown } from 'react-bootstrap'
import { db } from '../../../../firebase';

export const Form = () => {

    const [users, setUsers] = useState([]);

    useEffect(
        () =>
            onSnapshot(query(collection(db, "Users"), orderBy("username", "desc")),
                (snapshot) => {
                    setUsers((users) => snapshot.docs);
                }),
        []
    );

    var curr_user = window.sessionStorage.getItem("CurrUser")
    var curr_user_json = JSON.parse(curr_user)

    const doctors = new Array(5)
    var docInd = 0

    for (var i = 0; i <= users.length - 1; i++) {
        if (users[i].data().doctor == true) {
            if (curr_user_json.insurance_name == users[i].data().insurance_name) {
                doctors[docInd] = users[i].data()
                docInd += 1
            }
        }
    }

    const [value, setValue] = useState('');

    const handleSelect = (e) => {
        console.log(e);
        setValue(e)
    }

    const submitReq = async (e) => {

        const doc_name = value
        console.log(doc_name)
        var doc_info = await getDoc(doc(db, "Users", doc_name))

        var patients = null

        doc_info = doc_info.data()
        if(doc_info.patient == []) {
            patients = []
            patients.push(curr_user_json.username)
            await setDoc(doc(db, "Users", doc_name), {
                full_name: doc_info.full_name, 
                username: doc_info.username, 
                password: doc_info.password,
                insurance_name: doc_info.insurance_name,
                doctor: doc_info.doctor, 
                patient: patients
            })
        } else {
            patients = doc_info.patient
            patients.push(curr_user_json.username)
            await setDoc(doc(db, "Users", doc_name), {
                full_name: doc_info.full_name, 
                username: doc_info.username, 
                password: doc_info.password,
                insurance_name: doc_info.insurance_name,
                doctor: doc_info.doctor, 
                patient: patients
            })
        }

        await setDoc(doc(db, "requests", doc_name), {
            doctor_name: doc_name, 
            patient: curr_user_json.full_name,
            username: curr_user_json.username,
            request: document.getElementById("req").value
        });

        window.location.href = "./dashboard" 
    }

    return (
        <Container>
            <div align='center'>
                <h3 class='font-railway'>Please Input Your Doctor Request Issue</h3>
                <div align='left'>
                    <NavDropdown className='items-start' title="List of Doctors" id="basic-nav-dropdown" onSelect={handleSelect}>
                        {doctors.map((doctor) => (
                            <NavDropdown.Item eventKey={doctor.full_name}>{doctor.full_name}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </div>
                <textarea id="req" class="w-100 h-80 border-4 outline-black-100 outline-10 hover:outline-2 resize rounded-md caret-black"></textarea>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={submitReq}>
                    <a href='#'>Contact Doctor</a>
                </button>
            </div>
        </Container>
    )
}
