import React, { Component } from 'react';
import './Header.css'
import Icon from '../../img/icons/logo2.png';
import { Link, NavLink } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg">
                    <Link className="navbar-brand" to="/" data-target=".navbar-collapse.show" >
                        <img className="d-inline-block align-middle mr-2" src={Icon} alt="Icon" width='22px' style={{ margin: ' 0 5px' }} />
                        <span className="d-inline-block align-middle">TRAVELLOG</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarsExampleDefault" style={{}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <NavLink className="nav-link" activeClassName="selected" activeStyle={{ color: "white" }} to="/blogs"><strong>Blog</strong></NavLink>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <NavLink className="nav-link" activeClassName="selected" activeStyle={{ color: "white" }} to="/places">Places</NavLink>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <NavLink className="nav-link" activeClassName="selected" activeStyle={{ color: "white" }} to="/aboutme">About me</NavLink>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <NavLink className="nav-link" activeClassName="selected" activeStyle={{ color: "white" }} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        {/* <ul className="navbar-nav">
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <NavLink className="nav-link" activeClassName="selected" activeStyle={{ color: "white" }} to="/signin">Sign in</NavLink>
                            </li>
                            <li className="nav-item"><span className="nav-link">/</span></li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <NavLink className="nav-link" activeClassName="selected" activeStyle={{ color: "white" }} to="/register">Register</NavLink>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;