import React from 'react'
import { Container } from 'react-bootstrap'
import UserNavBar from './UserNavBar'
import Calendar from 'react-calendar'
import { TabOverview } from './TabOverview'
import {TabOverviewData} from './Constants'

var curr_user = window.sessionStorage.getItem("CurrUser")
var curr_user_json = JSON.parse(curr_user)
console.log(curr_user_json)

export const Dashboard = () => {
    return (
        <Container>
            <UserNavBar />
            <div class='grid grid-cols-3 pt-10'>
                <div class='col-span-2'>
                    <h3>Overview of {curr_user_json.full_name}</h3>
                </div>
                <div>
                    <h3>Appointments</h3>
                    <Calendar />
                </div>
                <div class='px-8 pt-12'>
                    <TabOverview title={TabOverviewData.TITLE_A} blurb={TabOverviewData.BLURB_A} link={TabOverviewData.LINK_A}/>
                </div>
                <div class='px-8 pt-8'>
                    <TabOverview title={TabOverviewData.TITLE_B} blurb={TabOverviewData.BLURB_B} link={TabOverviewData.LINK_B}/>
                </div>
                <div class='px-8 pt-12'>
                    <TabOverview title={TabOverviewData.TITLE_C} blurb={TabOverviewData.BLURB_C} link={TabOverviewData.LINK_C}/>
                </div>
            </div>
        </Container>
    )
}
