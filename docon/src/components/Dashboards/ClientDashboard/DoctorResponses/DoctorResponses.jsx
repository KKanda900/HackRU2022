import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { db } from '../../../../firebase';
import NavBar from '../../ClientDashboard/UserNavBar';

export const DoctorResponses = () => {
  const [responses, setResponses] = useState([]);
  var curr_user = window.sessionStorage.getItem("CurrUser")
  var curr_user_json = JSON.parse(curr_user)

  useEffect(
    () =>
      onSnapshot(query(collection(db, "responses"), orderBy("doctor_name", "desc")),
        (snapshot) => {
          setResponses((responses) => snapshot.docs);
        }),
    []
  );

  return (
    <Container>
      <NavBar />
      {responses.map(response => (
        <div class="justify-items-center bg-white px-8 pt-100 pb-8 mt-40">
        <ul class="divide-y-2 divide-gray-100">
            <li class="p-3">{response.data().doctor_name}s Response:</li>
            <ul id="req">
                {response.data().response}
            </ul>
        </ul>
        </div>
      ))}
    </Container>
  )
}