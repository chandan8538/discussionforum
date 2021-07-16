import React from 'react'
// import { TabPane } from 'react-bootstrap';
import pic from "./images/chandan.JPG";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={pic} alt="pic" />
              </div>

            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Chandan Kumar</h5>
                <h6>Fullstack Developer</h6>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>

                  {/* <li className="nav-item">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                  </li> */}
                </ul>
              </div>

            </div>

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>

          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>Important Link</p>
                <a href="https://www.linkedin.com/in/chandan-kumar06/" target="chandan">Linkedin</a><br />
                <a href="https://github.com/chandan8538" target="chandan">GitHub</a><br />


              </div>
            </div>




            {/* right side data toogle */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="mytabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                  <div className="row" mt-3>
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Chandan kumar</p>
                    </div>
                  </div>

                  <div className="row" mt-3>
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>chandan.kr8413@gmail.com</p>
                    </div>
                  </div>

                  <div className="row" mt-3>
                    <div className="col-md-6">
                      <label>Mo No</label>
                    </div>
                    <div className="col-md-6">
                      <p>7903039306</p>
                    </div>
                  </div>



                </div>
              </div>
            </div>

          </div>

        </form>
      </div>
    </>
  )
}

export default About








// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


// const About = () => {
//   const pages = ['home'];

//   const navLinks = pages.map(a => {
//     return (
//       <>
//       <a href={'/'+a}>{a}</a>
//       <br/>
//       </>
//     )
//   });
//     return (
//         <div className="row align-items-start">
//           <div className="col">
//             <h1>About Page.</h1>
//             <br/><br/><br/><br/><br/><br/><br/><br/>
//             <button className="btn btn-success">Button</button><br/><br/><br/><br/>
//             <Button>Test</Button><br/><br/>
//             {navLinks}
//             <br/><br/>


//           </div>
//         </div>
//       );
// };

// export default About;