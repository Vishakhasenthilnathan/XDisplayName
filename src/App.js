import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [fullName, setFullName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    };

    const saveFirstName = (e) => {
        setFirstName(e.target.value);
        setFullName("");
    };
    const saveLastName = (e) => {
        setLastName(e.target.value);
        setFullName("");
    };

    const shouldShowFullName = fullName !== "";
    console.log(shouldShowFullName);
    return (
        <div className="App">
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstName" placeholder="First Name" onChange={saveFirstName} required/>
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" placeholder="Last Name" onChange={saveLastName} required/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {shouldShowFullName && (
                <div>Full Name: {fullName}</div>
            )}
        </div>
    );
}

export default App;
