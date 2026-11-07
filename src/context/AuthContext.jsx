import { createContext, useState} from 'react';


// Create the Authentication Context

export const  AuthContext = createContext();

export default function AuthProvider({children}){

    // Track whether the user is logged in or logged out
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //Function to login
    const login = () => {
        setIsAuthenticated(true);
    }

    //Function to log out
    const logout=()=>{
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value ={{ isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}