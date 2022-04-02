import './App.css';
import Signin from './components/Login/Signin';
import Login from './components/Login/Login'
import HomePage from './components/HomePage/HomePage';
import { Dashboard } from './components/Dashboards/ClientDashboard/Dashboard';
import { RequestForm } from './components/Dashboards/ClientDashboard/RequestDoctor/RequestForm';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

/* async function add() {
	await setDoc(doc(db, "cities", "LA"), {
		name: "Los Angeles",
		state: "CA",
		country: "USA"
	});
} */

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<HomePage/>}/>
				<Route path={'/login'} element={<Signin/>}/>
				<Route path={'/signup'} element={<Login/>}/>
				<Route path={'/dashboard'} element={<Dashboard/>}/>
				<Route path={'/request'} element={<RequestForm/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
