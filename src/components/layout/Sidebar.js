import React, { Component } from "react";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


class Sidebar extends Component {

  render(){
  const  {maintainAuth} = this.props
  console.log(maintainAuth)
   const link = maintainAuth ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className="sidebar">
    <div className="menu-toggle rounded" href="sidebar-wrapper">
    {link} <i className="fas fa-bars" /> 
          
        </div>
    </div>
  );
};
}

const mapStateToProps = (state) => {
  return {
    maintainAuth : state.maintainauth.uid
 
  }
}

export default connect(mapStateToProps)(Sidebar);
