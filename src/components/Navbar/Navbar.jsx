import {NavLink } from "react-router-dom"

export default function Navbar() {
    return(
        <nav>
            <h2>My Blog</h2>
            <NavLink to ="/blog">Blog</NavLink>
        </nav>
    )
}