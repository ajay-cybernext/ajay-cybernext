import React from "react";

class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.brand.model}!</h2>;
    }
  }
  
  class Users extends React.Component {
    render() {
      const carinfo = {name: "Ford", model: "Mustang"};
      return (
        <div>
        <h1>Who lives in my garage?</h1>
        <Car brand={carinfo} />
        </div>
      );
    }
  }

export default Users;