
import { Link } from "react-router-dom";
import "./header.css";
import Login from "./login";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3 ">
            <div className="container-fluid justify-content-center">

                <Link to="/">Home</Link>
                <Link to="register">Register</Link>
                <Link to="login">Login</Link>
                <Link to="logout">Logout</Link>
            </div>
        </nav>
    );
}