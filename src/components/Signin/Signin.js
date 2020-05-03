import React, { Component } from 'react';
import './Signin.css'
class Signin extends Component {
    render() {
        return (
            <div className="login-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card card_login">
                                <div className="card-body">
                                    <h2 style={{ textAlign: 'center', margin: '10px' }}>Sign in</h2>
                                    <form action method>
                                        <div className="form-group row">
                                            <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" required autofocus />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" name="password" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember" />Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 offset-md-4 text-center" >
                                            <button type="submit" className="btn btn-primary">Sign in</button>
                                            <a href="/#" className="btn btn-link">Forgot Your Password?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;