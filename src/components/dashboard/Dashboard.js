import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { getProject } from "./../../store/actions/projectActions";
import { connect } from "react-redux";
class Dashboard extends Component {
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.number === nextProps.number) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  componentDidMount(){
    this.props.getProjects();
  }
  render() {

    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>

          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.getproject.projects
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProjects: project => dispatch(getProject())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
