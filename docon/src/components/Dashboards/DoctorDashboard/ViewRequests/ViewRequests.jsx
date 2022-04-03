import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { db } from '../../../../firebase';
import NavBar from '../AdminNavBar/AdminNavBar'
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';

export const ViewRequests = () => {
    const [requests, setRequests] = useState([]);
    var curr_user = window.sessionStorage.getItem("CurrUser")
    var curr_user_json = JSON.parse(curr_user)

    var patients = curr_user_json.patient

    const [val, setValue] = useState(false)

    useEffect(
        () =>
            onSnapshot(query(collection(db, "requests"), orderBy("doctor_name", "desc")),
                (snapshot) => {
                    setRequests((requests) => snapshot.docs);
                }),
        []
    );

    const sendResp = async (e) => {

        console.log("SOMETHING")
        
        console.log(patients)
        console.log(curr_user_json.full_name)

        await setDoc(doc(db, "responses", curr_user_json.full_name), {
            doctor_name: curr_user_json.full_name, 
            response: document.getElementById("response").value
        });

        await deleteDoc(doc(db, "requests", curr_user_json.full_name))
        
        console.log("END OF QUERY")

        window.location.href = "/admin" 
    }

    return (
        <Container>
            <NavBar />
            {requests.map(request => (
                <div class="justify-items-center bg-white px-8 pt-100 pb-8 mt-40">
                    <ul class="divide-y-2 divide-gray-100">
                        <li class="p-3">{request.data().patient}s Request:</li>
                        <ul id="req">
                            {request.data().request}
                        </ul>
                        <ul className='mt-10'>
                            <button class="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setValue(!val)}>Send Response</button>
                            {val ? (
                                <>
                                    <div className='mt-9 ml-33'>
                                        <textarea id="response" class="w-100 h-80 border-4 outline-black-100 outline-10 hover:outline-2 resize rounded-md caret-black"></textarea>
                                        <button class="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={sendResp}>Send</button>
                                    </div>
                                </>
                            ) : (
                                <>

                                </>
                            )}
                        </ul>
                    </ul>
                </div>
            ))}
        </Container>
    )
}
