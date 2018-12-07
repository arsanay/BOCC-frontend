import axios from 'axios'
const initState = {
  projects: []
}

const projectReducer =  (state = initState, action) => {
  //console.log(initState)
  switch(action.type){
    case 'CREATE_PROJECT':
    console.log('created project', action.project);
    
       axios.post('http://localhost:8081/task',{
        title:action.project.title,
        content:action.project.content,
        creator:action.project.creator ,
        deadline: action.project.deadline,
        imageFile:action.project.imageFile,
        progress:action.project.progress
   
     })
   
  }
  return state;
};

export default projectReducer;