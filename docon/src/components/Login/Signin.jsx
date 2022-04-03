import NavBar from '../HomePage/NavBar'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Signin() {

    const [users, setUsers] = useState([]);

    useEffect(
        () =>
            onSnapshot(query(collection(db, "Users"), orderBy("username", "desc")),
                (snapshot) => {
                    setUsers((users) => snapshot.docs);
                }),
        []
    );

    const signin = async (e) => {

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        var check = false
        var curr_user = null

        for (var i = 0; i <= users.length - 1; i++) {
            if (username === users[i].data().username && password === users[i].data().password) {
                check = true;
                curr_user = users[i].data()
                console.log(curr_user)
                break
            }
        }

        if (check === true && (curr_user.doctor === true)) {
            var user = window.sessionStorage.setItem("CurrUser", JSON.stringify(curr_user));
            window.location.href = "/admin"
        } else if (check === true && (curr_user.doctor === false)) {
            var user = window.sessionStorage.setItem("CurrUser", JSON.stringify(curr_user));
            window.location.href = '/dashboard'
        } else {
            alert("Incorrect Username and Password!");
            window.location.href = "./login"
        }

    }

    return (
        <Container>
            <NavBar />
            <form className="justify-items-center bg-white shadow-md rounded px-8 pt-100 pb-8 mt-40">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={signin}>
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </Container>
    )
}