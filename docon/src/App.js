import './App.css';
import Signin from './components/Login/Signin';
import Login from './components/Login/Login'
import HomePage from './components/HomePage/HomePage';
import { Dashboard } from './components/Dashboards/ClientDashboard/Dashboard';
import { RequestForm } from './components/Dashboards/ClientDashboard/RequestDoctor/RequestForm';
import { HospitalDashboard } from './components/Dashboards/ClientDashboard/ViewHospitals/HospitalDashboard';
import { Admins } from './components/Dashboards/DoctorDashboard/Admins';
import { ViewRequests } from './components/Dashboards/DoctorDashboard/ViewRequests/ViewRequests';
import { ViewPatients } from './components/Dashboards/DoctorDashboard/ViewPatients/ViewPatients';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<HomePage/>}/>
				<Route path={'/login'} element={<Signin/>}/>
				<Route path={'/signup'} element={<Login/>}/>
				<Route path={'/dashboard'} element={<Dashboard/>}/>
				<Route path={'/admin'} element={<Admins/>}/>
				<Route path={'/patientrequests'} element={<ViewRequests/>}/>
				<Route path={'/patients'} element={<ViewPatients/>}/>
				<Route path={'/request'} element={<RequestForm/>}/>
				<Route path={'/hospitals'} element={<HospitalDashboard/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
