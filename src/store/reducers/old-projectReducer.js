import axios from 'axios'
const initState = {
  projects: [
    {id: '1', title: 'Manohara', content: 'Enrico Mantap'},
    {id: '2', title: 'B O C C', content: 'Asa JOSS'},
    {id: '3', title: 'DESHO', content: 'Ade TOP'}
  ]
}

const projectReducer =  (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
    console.log('created project', action.project);
    
  }
  return state;
};

export default projectReducer;


const projectReducer = async (state = initState, action) => {
    switch(action.type){
      case 'CREATE_PROJECT':
      console.log('created project', action.project);
      try{
        await  axios.post('http://localhost:8081/task',{
          title:action.project.title,
          content:action.project.content,
          creator:action.project.creator ,
          deadline: action.project.deadline,
          imageFile:action.project.imageFile,
     
       })
     } catch(err){
       console.log(err)
     }
    }
    return state;
  };
  