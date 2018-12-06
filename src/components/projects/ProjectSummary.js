import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
 // console.log(project)
 const date = project.deadline;
 const deadline = moment(date).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>{project.creator}</p>
        <p className="grey-text">Deadline : {deadline}</p>
      </div>
    </div>
  )
}

export default ProjectSummary