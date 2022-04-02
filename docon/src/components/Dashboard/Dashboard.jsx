import React from 'react'
import UserNavBar from './UserNavBar'

var curr_user = window.sessionStorage.getItem("CurrUser")
var curr_user_json = JSON.parse(curr_user)

export const Dashboard = () => {
    return (
        <div>
            <UserNavBar/>
            <h1>Welcome user!</h1>
        </div>
    )
}
