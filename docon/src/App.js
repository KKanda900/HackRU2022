import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
