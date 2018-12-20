import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  console.log(projects)
  return (
    <div className="project-list section">
      { projects.map(project => {
        return (
       
            <ProjectSummary project={project} />
      
        )
      })}  
    </div>
  )
}

export default ProjectList

