import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import Modal from "react-responsive-modal";
import { editProject } from "../../store/actions/projectActions";
import { deleteProject } from "../../store/actions/projectActions";
import {  } from "../../store/actions/projectActions";

class ProjectDetails extends React.Component {
  state = {
    open: false,
      title: this.props.location.project.project.title,
      content: this.props.location.project.project.content,
      creator: this.props.location.project.project.creator,
      deadline: this.props.location.project.project.deadline,
      imageFile: this.props.location.project.project.imageFile,
      progress: this.props.location.project.project.progress,
      id: this.props.location.project.project._id,
    };
  

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleChangeDate = Date => {
    console.log(Date);
    this.setState({
      deadline: Date
    });
    // this.state.deadline=string
  };
  handleSubmit = e => {
     e.preventDefault();
    console.log(this.state);
    this.props.editProjects(this.state);
    alert("Project Successfully Edited");
    // console.log
  };

  handleClickDel = e => {
   // e.preventDefault()
    console.log(this.state);
    this.props.deleteProjects(this.state);
    alert("Project Successfully Deleted");
  }

  render() {
    let labelClass = `uploader ${this.state.loaded && "loaded"}`;
    const { open } = this.state;
    const project = this.props.location.project.project;
   // console.log(project);
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {project.creator}</div>
              <div>
                {moment(project.deadline).format("MMMM Do YYYY, h:mm:ss a")}
              </div>
              <div
                className="ldBar"
                data-value={project.progress}
                data-preset="stripe"
              />
              <div className="row">
                <div
                  class="btn-floating-edit green pulse btn-small col s1 offset-m4"
                  onClick={this.onOpenModal}
                >
                  <i class="material-icons">edit</i>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                  <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>
                      <h5 className="grey-text text-darken-3">
                        Edit the Project
                      </h5>
                      <label htmlFor="setDeadline" id="deadline">
                        Title
                      </label>
                      <div className="input-field">
                        <input
                          type="text"
                          defaultValue={project.title}
                          id="title"
                          required
                          onChange={this.handleChange}
                          placeholderText="Title"
                        />
                      </div>
                      <label htmlFor="setDeadline" id="deadline">
                        Content
                      </label>
                      <div className="input-field">
                        <textarea
                          defaultValue={project.content}
                          id="content"
                          className="materialize-textarea"
                          required
                          onChange={this.handleChange}
                          placeholderText="Content"
                        />
                      </div>
                      <label htmlFor="setDeadline" id="deadline">
                        Creator
                      </label>
                      <div className="input-field">
                        <textarea
                          id="creator"
                          className="materialize-textarea"
                          defaultValue={project.creator}
                          onChange={this.handleChange}
                          placeholderText="Creator"
                        />
                      </div>
                      <label htmlFor="setDeadline" id="deadline">
                        Current Progress (%)
                      </label>
                      <div
                        className="input-field"
                        placeholderText="Current Progress (%)"
                      >
                        <textarea
                          id="progress"
                          className="materialize-textarea"
                          required
                          defaultValue={project.progress}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="setDeadline" id="deadline">
                          Set Deadline
                        </label>
                      </div>
                      <div>
                        <DatePicker
                          id="deadline"
                          required
                          type="Date"
                          onChange={Date => this.handleChangeDate(Date)}
                          selected={this.state.deadline}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          dateFormat="MMMM d, yyyy h:mm aa"
                          timeCaption="time"
                          placeholderText="Set Deadline"
                        />
                      </div>

                      <label
                        className={labelClass}
                        onDragEnter={this.onDragEnter}
                        onDragLeave={this.onDragLeave}
                        onDragOver={this.onDragOver}
                        onDrop={this.onDrop}
                      >
                        <img
                          src={this.state.imageSrc}
                          className={this.state.loaded && "loaded"}
                        />
                        <i
                          className="icon icon-upload"
                          style={{ color: this.state.active }}
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={this.onFileChange}
                          ref="input"
                        />
                      </label>

                      <div className="input-field">
                        <button className="btn pink lighten-1">Submit</button>
                      </div>
                    </form>
                  </div>

                  <p>
                    -------------------------------------------------------------------------------------------------------------------------------------------------------
                  </p>
                </Modal>
                <div class="btn-floating-edit red pulse btn-small col s1 offset-m1" onClick={this.handleClickDel}>
                  <i class="material-icons">delete</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  const id = ownProps.match.params._id;
  const projects = state.getproject.projects;
  const project = projects ? projects[id] : null;
  return {
    result_project: project
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editProjects: project => dispatch(editProject(project)),
    deleteProjects: project => dispatch(deleteProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
