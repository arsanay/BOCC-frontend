import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  console.log(project)
 const date = project.deadline;
 const deadline = moment(date).format('MMMM Do YYYY, h:mm:ss a')
 const dynamicId = project._id
 const dynamicURL = "http://localhost:3000/project/"+dynamicId
  return (
    <div className="container">
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title" ><a href={dynamicURL}>{project._id}</a> </div>
        <p>{project.creator}</p>
        <p className="grey-text">Deadline : {deadline}</p>
        <div
        className="ldBar"
  data-type="fill"
  data-value="90"
  data-path="M10 10L90 10L90 90L10 90Z"
  
  data-fill="data:ldbar/res,bubble(#248,#fff,50,1)"
></div>
        
       </div>
    </div>
    </div>
  )
}

export default ProjectSummary