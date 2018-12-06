import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class CreateProject extends Component {
  
  state = {
    title: '',
    content: '',
    creator:'',
    deadline:'',
    imageFile:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleChangeDate = (Date) => {
    console.log(Date)
    this.setState({
      deadline:Date
    })
  // this.state.deadline=string
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.createProjects(this.state)
    alert("");
   // console.log(this.props)
  }
  onFileChange= (e, file)=> {
      var file = file || e.target.files[0],
        pattern = /image-*/,
        reader = new FileReader();
        
    if (!file.type.match(pattern)) {
        alert('Formato inválido');
        return;
    }
    else {
    this.setState({ loaded: true });
    
    reader.onload = (e) => {
        this.setState({ 
            imageFile: reader.result, 
            loaded: true 
        }); 
    }
  }
    
    reader.readAsDataURL(file);
}
  render() {
    let labelClass  = `uploader ${this.state.loaded && 'loaded'}`
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create a New Project</h5>
               <div className="input-field">
                 <input type="text" id='title' required onChange={this.handleChange} />
                  <label htmlFor="title">Project Title</label>
              </div>

          <div className="input-field">
            <textarea id="content" className="materialize-textarea" required onChange={this.handleChange}></textarea>
              <label htmlFor="content">Project Content</label>
          </div>

          <div className="input-field">
              <textarea id="creator" className="materialize-textarea" required onChange={this.handleChange}></textarea>
            <label htmlFor="content">Creator</label>
          </div>

          <div>
            <label htmlFor="setDeadline" id="deadline">Set Deadline</label>
          </div>
          
          <div>
          <DatePicker id="deadline" defaultValue={Date.now()} required type="Date" onChange={(Date) => this.handleChangeDate(Date)}
               selected={this.state.deadline}  showTimeSelect timeFormat="HH:mm" timeIntervals={15} value={this.state.deadline}
               dateFormat="MMMM d, yyyy h:mm aa" timeCaption="time" placeholderText="Set Deadline"/>
          </div>
          

          <label 
              className={labelClass}
              onDragEnter={this.onDragEnter}
              onDragLeave={this.onDragLeave} 
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
             >
              
              <img src={this.state.imageSrc} className={this.state.loaded && 'loaded'}/>
              <i className="icon icon-upload" 
                  style={{ color: this.state.active  }}></i>
              <input type="file" accept="image/*" onChange={this.onFileChange} ref="input" />
          </label> 

          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
          </form> 
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
 
  return{
    
    createProjects: (project) =>dispatch(createProject(project))
  }
 
}
export default connect(null,mapDispatchToProps)(CreateProject)