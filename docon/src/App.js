import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

/* async function add() {
	await setDoc(doc(db, "cities", "LA"), {
		name: "Los Angeles",
		state: "CA",
		country: "USA"
	});
} */

function App() {
	return (
    <Login/>
  );
}

export default App;
