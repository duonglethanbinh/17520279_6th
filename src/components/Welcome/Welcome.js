import React, { Component } from 'react';
import './Welcome.css'
import { Link } from "react-router-dom";
class Welcome extends Component {
    render() {
        return (
            <div className="welcomebox">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-5 ">Welcome to<strong>Travellog</strong></h1>
                        <p>This website will provide you various experiences and feedback about famous locations or wonderful city which travelers or reviewers recommended. Let's consider your final decision based on our recommendations.<br />Have a
                nice day &#9749;&#9749;&#9749;</p>
                    </div>
                </div>
                <div className="card card_login text-center">
                    <div className="card-body">
                        <h5 className="card-title">We are trying to build our community. Join with us on <Link style={{ textDecoration: 'none', color: 'black' }} to="/blogs"><strong>Blog</strong></Link></h5>
                        {/* <p className="card-text">If you haven't own any account yet. Click the botton below</p>
                        <Link to="/signin" className="btn btn-primary btn-lg btn_edit">Sign in</Link>
                        <Link to="/register" className="btn btn-secondary btn-lg btn_edit">Register</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;