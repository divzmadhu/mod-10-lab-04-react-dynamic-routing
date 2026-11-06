import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext'

export default function Login(){

    // Access the login function from AuthContext
    const {login} = useContext(AuthContext);

    return (
        <div>
            <h1>Login Page</h1>
            <button className = "login" onClick = {login}>Log In </button>
        </div>
    );
}