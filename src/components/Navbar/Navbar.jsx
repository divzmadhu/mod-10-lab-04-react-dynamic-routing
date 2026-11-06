import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default function Navbar() {

    // Access the authentication status from AuthContext
    const { isAuthenticated, logout } = useContext(AuthContext);
    return (
        <nav>
            <h2>My Blog</h2>

            <NavLink to="/blog">Blog</NavLink>
            {
                isAuthenticated ? (
                    <>
                        <NavLink to="/admin">Admin</NavLink>
                        <button onClick = {logout}>Logout</button>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )
            }
        </nav >
    );
}