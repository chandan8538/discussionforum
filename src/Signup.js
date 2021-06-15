import React from 'react'

export const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="name" autoComplete="off" placeholder="Your Phone Number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="name" autoComplete="off" placeholder="Your profession" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="password" autoComplete="off" placeholder="Confirm Your password" />
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                                </div> */}

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register" />
                                </div>

                            </form>

                            {/* <div className="signup-image">
                                <figure>
                                    <img src={signup.jpg} alt="registration pic" />
                                </figure>
                                <Navlink to="/loginform" className="signup-image-link">I am already register</Navlink>
                            </div> */}


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
