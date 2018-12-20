import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const ProjectSummary = ({ project }) => {
  console.log(project);
  return (
    <Link
      to={{
        pathname: "/project/" + project._id,
        project: { project }
      }} key={project.id}
    >
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{project.title}</span>
          <p>Posted by {project.creator}</p>
          <p className="grey-text">
            Deadline on{" "}
            {moment(project.deadline).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
          <div
            className="ldBar"
            data-value={project.progress}
            data-preset="stripe"
            data-aspect-ratio="none"
            styles="width:100%;"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectSummary;
