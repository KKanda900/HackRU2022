import logo from './logo.svg';
import './App.css';
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
    <div className="App">
      <h1 className="text-6xl font-bold">
        DocOn
      </h1>
    </div>
  );
}

export default App;
