import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


class Navbar extends Component {

  render(){
  const  {maintainAuth} = this.props
  console.log(maintainAuth)
   const link = maintainAuth ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            B O C C
          </Link>
        {link}
        </div>
      </nav>
    </div>
  );
};
}

const mapStateToProps = (state) => {
  return {
    maintainAuth : state.maintainauth.uid
 
  }
}

export default connect(mapStateToProps)(Navbar);
