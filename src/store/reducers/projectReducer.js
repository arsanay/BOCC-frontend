import axios from 'axios'
const initState = {
  projects: [
    {id: '1', title: 'Manohara', content: 'Enrico Mantap',creator:'Mgr War Room'},
    {id: '2', title: 'B O C C', content: 'Asa JOSS',creator:'Mgr War Room'},
    {id: '3', title: 'DESHO', content: 'Ade TOP',creator:'Mgr War Room'}
  ]
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
   
     })
   
  }
  return state;
};

export default projectReducer;