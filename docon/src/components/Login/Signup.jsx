import NavBar from './LoginNavBar'
import React from 'react'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import { collection, doc, getDoc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

function toggle_switch() {
    document.getElementById("checkbox").checked = !document.getElementById("checkbox").checked
    console.log(document.getElementById("checkbox").checked)
}

export default function Signup() {
    const [doctor, setDoctor] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(
        () =>
            onSnapshot(query(collection(db, "Users"), orderBy("username", "desc")),
                (snapshot) => {
                    setUsers((users) => snapshot.docs);
                }),
        []
    );

    const signup = async (e) => {

        const full_name = document.getElementById("fullname").value
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const insurance_name = document.getElementById("insurancename").value

        // if users doesn't equal null then compare the username and password
        if (users != null) {
            for (var i = 0; i <= users.length - 1; i++) {
                if (username == users[i].data().username && password == users[i].data().password) {
                    alert("Login Exists!")
                    window.location.href = "./signup"
                }
            }
        }

        await setDoc(doc(db, "Users", username), {
            full_name: full_name,
            username: username,
            gender: document.getElementById("gender").value,
            password: password,
            insurance_name: insurance_name,
            doctor: doctor
        });

        var curr_user = { full_name: full_name, username: username, password: password, insurance_name: insurance_name, doctor: doctor }
        var user = window.sessionStorage.setItem("CurrUser", JSON.stringify(curr_user));
        window.location.href = "../dashboard"
    }

    return (
        <Container>
            <form className="justify-items-center bg-white shadow-md rounded px-8 pt-100 pb-8 mt-40">
                <div className="mb-4">
                    <p id="toggle">
                        <span className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setDoctor(false)}> User </span>
                        <span className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setDoctor(true)}> Doctor </span>
                    </p>
                </div>
                {doctor ? (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                                Full Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                Gender
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" placeholder="Type your gender out..." />
                        </div>
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
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="insurancename">
                                Insurance Accepted
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="insurancename" type="insurancename" placeholder="Type None if you don't have any" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={signup} type="button">
                                Sign Up
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
                                Full Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                Gender
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" placeholder="Type your gender out..." />
                        </div>
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
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="city">
                                City
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="city" type="city" placeholder="Type your city you live in...." />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="state">
                                State
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="state" type="state" placeholder="Type your state you live in...." />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="insurancename">
                                Type None if you don't have any
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="insurancename" type="insurancename" placeholder="Type None if you don't have any" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={signup} type="button">
                                Sign Up
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </>
                )}
            </form>
        </Container>
    )
}