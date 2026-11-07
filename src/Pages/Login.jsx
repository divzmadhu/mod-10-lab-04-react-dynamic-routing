import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

export default function Login() {

    // Access the login function from AuthContext
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const message = location.state?.message;

    const handleLogin = () => {
        login();
        navigate('/blog', {
            state: { message: 'You are now logged in successfully!' }
        });
    }

    return (
        <div>
            <h1>Login Page</h1>
            {message && <p>{message}</p>}
            <button className="login" onClick={handleLogin}>Log In</button>
        </div>
    );
}