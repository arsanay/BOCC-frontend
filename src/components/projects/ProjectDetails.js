import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProject} from './../../store/actions/projectActions'
class ProjectDetails extends Component{
render() {
  this.props.getProjects(this.state)
  const { projects } = this.props;
  const title = projects.map((project) => project.title)
  const content = projects.map((project) => project.content)
  const creator = projects.map((project) => project.creator)
  const deadline = projects.map((project) => project.deadline)
 console.log(projects)
  return (
  
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {title[0]} </span>
          <p> {content[0]}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{creator[0]}</div>
          <div>{deadline[0]}</div>
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

export default connect (mapStateToProps,mapDispatchToProps)(ProjectDetails)