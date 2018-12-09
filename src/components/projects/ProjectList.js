import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class ProjectList extends React.Component {
  
  render(){
  return (
    <div className="project-list section">
      { this.props.result_project.map(project => {
        return (
          <Link to={ 
            {
             pathname: "/project/"+ project._id,
              tes:{project}
            }
          }>
          <div className="container" >
            <div className="card z-depth-0 project-summary" class="card-panel hoverable">
              <div className="card-content grey-text text-darken-3">
           <div className="card-title"><p>{project.title}</p>  </div>

        <p>{project.creator}</p>
        <p className="grey-text">Deadline : {project.deadline}</p>
        <div className="ldBar" data-value={project.progress} data-preset="stripe"></div>
        <a class="btn-floating-edit cyan pulse btn-small"><i class="material-icons">edit</i></a>
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