import React from 'react'
import { Link } from "react-router-dom";
import Signupic from "./images/signup.svg";


export default class SignUp extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
        gender: ""
    };

    handleOnChangeInput = (e, attribute) => {
        this.setState({ [attribute]: e.target.value });
    };

    submit = () => {
        fetch("http://localhost:3000/create", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                mobile: this.state.mobile,
                password:this.state.password,
                cpassword: this.state.cpassword,
                gender: this.state.gender
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    //const Signup = () => {
        render() {
        return (
            <>

                <section className="signup">
                    <div className="container mt-5">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <img src={Signupic} alt="signup pic" />
                                {/* <img src="https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" /> */}
                                <form className="register-form" id="register-form">

                                    <div className="form-group">
                                        <label htmlFor="firstname">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input type="text" name="firstname" id="firstname" autoComplete="off" placeholder="Your FirstName"

                                            onChange={(e) => this.handleOnChangeInput(e, "firstname")}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastname">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input type="text" name="lastname" id="lastname" autoComplete="off" placeholder="Your LastName"

                                            onChange={(e) => this.handleOnChangeInput(e, "lastname")}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                        <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email"

                                            onChange={(e) => this.handleOnChangeInput(e, "email")}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mobile">
                                            <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                        </label>
                                        <input type="number" name="mobile" id="name" autoComplete="off" placeholder="Your Mobile Number"

                                            onChange={(e) => this.handleOnChangeInput(e, "mobile")} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="gender">
                                            <i class="zmdi zmdi-male-female"></i>
                                        </label>
                                        <input type="text" name="gender" id="name" autoComplete="off" placeholder="Your Gender "

                                            onChange={(e) => this.handleOnChangeInput(e, "gender")} />
                                    </div>

                                    {/* <div className="form-group">
                                    <label htmlFor="city">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="city" id="name" autoComplete="off" placeholder="Your city" />
                                </div> */}

                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i className="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password"

                                            onChange={(e) => this.handleOnChangeInput(e, "password")}
                                        />
                                    </div>

                                    <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="password" autoComplete="off" placeholder="Confirm Your password"
                                    onChange={(e) => this.handleOnChangeInput(e, "password")}  />
                                </div>

                                    {/* <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                                </div> */}

                                    {/* <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="register" />
                                    </div> */}

                                </form>
                                <button className="button" onClick={this.submit}>
                                    {" "}
                                    SIGN UP
                                </button>
                                <Link to="/">
                                    <button className="button"> LOG IN</button>
                                </Link>

                                {/* <div className="signup-image">
                                <figure>
                                    <img src={signup} alt="registration pic" />
                                </figure>
                                <Navlink to="/loginform" className="signup-image-link">I am already register</Navlink>
                            </div> */}


                            </div>
                        </div>
                    </div>
                </section>
            </>
        
        );
    }
                        
 }

    //export default Signup;
