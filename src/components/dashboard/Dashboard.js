import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { getProject} from './../../store/actions/projectActions'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    this.props.getProjects(this.state)
    const { projects } = this.props;
   // console.log(projects)
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects:state.getproject.projects
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    getProjects:(project) => dispatch(getProject(project))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)