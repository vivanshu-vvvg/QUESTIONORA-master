import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/ask');
    }
    return (
        <div>
            <img className="logo" src={require('./logo.png')} alt="logo"/>
            {auth ? <ul className="nav-ul">
                <li><Link to="/ask">Ask Questions</Link></li>
                <li><Link to="/ans">Answer Questions</Link></li>
                <li><Link to="/yourquestions">Your Questions</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li></ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>}
                <ul className="nav-ul nav-right">
                <h1>Questionora - We answer your ❓</h1></ul>
        </div>
    )
}
export default Nav;