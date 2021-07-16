import React from 'react';
import loginpic from "./images/login.svg";
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure>
                                <img src={loginpic} alt="login pic" />
                            </figure>
                            <Link to="/signup" className="signup-image-link">create an Account</Link>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            {/* <img src="https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" /> */}
                            <form className="register-form" id="register-form">

                                
                                
                                {/* <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="mobile">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="mobile" id="name" autoComplete="off" placeholder="Your Mobile Number" />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password" />
                                </div>

                               
                                

                                <div className="form-group form-button">
                                    <input type="submit" name="login" id="login" className="form-submit" value="login" />
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default login
