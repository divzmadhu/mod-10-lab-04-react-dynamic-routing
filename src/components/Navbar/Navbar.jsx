import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default function Navbar() {

    // Access the authentication status from AuthContext
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        
        navigate('/blog', {
            state: { message: 'You have been logged out successfully!' }
        });
        logout();

    };
    return (
        <nav>
            <h2>Beyond the Basics</h2>

            <NavLink to="/blog">Explore</NavLink>
            {
                isAuthenticated ? (
                    <>
                        <NavLink to="/admin">Admin</NavLink>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )
            }
        </nav >
    );
}