//--copy navbar

import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
//import logo from "../images/logo2.png";
//import {UserContext} from "../App";


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    {/* <img src={logo} alt="logo" /> */}
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        {/* <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/logout">login</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/signup">Register</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/AddPost">AddPost</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active-page" className="nav-link" to="/EditPost">EditPost</NavLink>
                        </li>                
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

// {/* //------my navbar


// import React from 'react';


// const Navbar = (props) => {
//     console.log(props);
//     const {age, name, address, state} = props;

//     // function handleClick () {
//     //     testClick;
//     // }

//     return (
//         <>
//         {/* <button onClick={testClick}>Click here...</button> */}
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//             {/* <a class="navbar-brand" href="#">Navbar</a> */}
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/">Home</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link" href="/about">About</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
//                 </li>
//                 {/* <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/contact">{name}</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/sdfsfsf">{age}</a>
//                 </li> */}
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/login">Login</a>
//                 </li>
//                 <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/Signup">Signup</a>
//                 </li>
//                 {/* <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/timer">Timer</a>
//                 </li> */}
//                 <li class="nav-item dropdown">
//                 {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown
//                 </a> */}

//                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                     {/* <li><a class="dropdown-item" href="#">Action</a></li>
//                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                     {/* <li><hr class="dropdown-divider"></li> */}
//                     {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */} 
//                 </ul>
//                 </li>
//                 <li class="nav-item">
//                 {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
//                 </li>
//             </ul>
//             <form class="d-flex">
//                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button class="btn btn-outline-success" type="submit">Search</button>
//             </form>
//             </div>
//         </div>
//         </nav>
//         </>
//         )
// };

// /export default Navbar; */}