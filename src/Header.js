import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    const nameTemp="Deepak";
    const ageTemp=30;
    // const testClick = () => {
    //     console.log("Clicked...");
    // }
    return (
        <>
            <div class="col-md-12 col-lg-12 col-xl-12 mb-4">
                <div class="p-5 text-center bg-light">
                    <h1 class="mb-3">Discussion Forum</h1>
                </div>
                <Navbar name={nameTemp} age={ageTemp} address="ggn" state="HR"/>
            </div>
            {/* <div class="col-md-4 col-lg-4 col-xl-4 mb-4">
                <div class="p-5 text-center bg-light">
                    <a class="btn btn-primary" href="" role="button">Call to action</a>
                </div>
            </div> */}
            </>
    );
};

export default Header;































// import React from 'react';
// import propTypes from 'prop-types';
// import { Link , Router } from "react-router-dom";



// //export default function Header(props) {
//     export default function Header({props}) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Router>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Navbar</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li>
//               {/* <li className="nav-item dropdown">
//                 <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//           </Link>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><Link className="dropdown-item" to="#">Action</Link></li>
//                   <li><Link className="dropdown-item" to="#">Another action</Link></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><Link className="dropdown-item" to="#">Something else here</Link></li>
//                 </ul>
//               </li> */}
//               <li className="nav-item">
//                 <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//         </Router>

//       </nav>
//     )
// }

















//  //Header.defaultprops = {
//     title: "your Title Here",
//     searchBar:true

// }

// Header.propTypes = {
//     title: propTypes.string,
//     searchBar: propTypes.bool.isRequired
// }

