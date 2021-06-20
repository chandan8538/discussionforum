import { render } from '@testing-library/react';
import React from 'react';

class Contact extends React.Component {
  //lifecycle methods
//   constructor() {
//     this.state = {
//       name: 'Chandan',
//     }
//   }



  render() {
    //let {count} = this.state;
    return (
      <div className="row align-items-start">
          <div className="col-12">
            <h1>Contact Page.</h1>
            
            <h1>{this.state.name}</h1>
            <br/><br/><br/><br/><br/><br/>
            <button className="btn btn-success">Button</button>
            <button class="btn btn-secondary">test Button</button>
          </div>
        </div>
    );
  }
};

export default Contact;