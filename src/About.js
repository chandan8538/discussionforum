import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const About = () => {
  const pages = ['home', 'blog', 'pics'];

  const navLinks = pages.map(a => {
    return (
      <>
      <a href={'/'+a}>{a}</a>
      <br/>
      </>
    )
  });
    return (
        <div className="row align-items-start">
          <div className="col">
            <h1>About Page.</h1>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <button className="btn btn-success">Button</button><br/><br/><br/><br/>
            <Button>Test</Button><br/><br/>
            {navLinks}
            <br/><br/>


          </div>
        </div>
      );
};

export default About;