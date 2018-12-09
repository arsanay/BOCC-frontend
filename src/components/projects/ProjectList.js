import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ProjectList extends React.Component {
  
  handleOnClick= (event) =>{
    console.log(event)
     this.setState({
       selected_project: event
     })
  }

  render(){
 //   console.log(this.props)
  return (
    <div className="project-list section">
      { this.props.result_project.map(project => {
        return (
          <Link to={'/project/'+ project._id}>
          <div className="container">
            <div className="card z-depth-0 project-summary" onClick={this.handleOnClick(project._id)}>
              <div className="card-content grey-text text-darken-3">
        <div className="card-title"><p>{project.title}</p> </div>
        <p>{project.creator}</p>
        <p className="grey-text">Deadline : {project.deadline}</p>
       
       </div>
    </div>
    </div>  
          </Link>
        )
      }
      )}  
    </div>
  )
    }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    result_project:state.getproject.projects
  }
}

export default  connect(mapStateToProps,null)(ProjectList)