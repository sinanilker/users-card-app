import logo from './logo.svg';

import './App.css';
import {useState} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import Header from "./components/shared/header/Header";


function App() {

    //   Users Input State Hooks
    const [user, setUser] = useState({userName: "", email: "", country: ""})
    //   Error Checks
    const [isUserValid, setIsUserValid] = useState({userName: true, email: true, country: true})
    // Users List
    const [userList, setUserList] = useState([])


    axios.get("http://localhost:5050/users").then((response) => {
        console.log(response.data);
        userList.length === 0 && setUserList(response.data)
    })

    const addUser = (event) => {
        event.preventDefault();
        setIsUserValid({...user});
        if (!(Object.values(user).some(value=> !value))) {
            setUser(
                [
                    // Crypto to use randomized crypted Id for each
                    ...userList, {Crypto.randomUUID, ...user}
                ]
            );
            setUser({userName: "", email: "", country: ""});
        }
    }

    const updateUserInput = (userProp) =>
        setUser(prevState => ({...prevState, ...userProp}))

    return (
        <div className="App">
    <Header />
        </div>
    );
}

export default App;
