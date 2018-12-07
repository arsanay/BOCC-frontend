import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects.map(project => {
        return (
          <ProjectSummary project={project} 
          />   
        )
      })}  
    </div>
  )
}

export default ProjectList