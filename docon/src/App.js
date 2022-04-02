import './App.css';
import HomePage from './components/HomePage/HomePage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

async function add() {
	await setDoc(doc(db, "cities", "LA"), {
		name: "Los Angeles",
		state: "CA",
		country: "USA"
	});
}

function App() {
	add()
	return (
		<HomePage/>
  );
}

export default App;
