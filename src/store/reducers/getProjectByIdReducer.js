import axios from 'axios'
const initState = {
  projects: [
    {id: '1', title: 'Manohara', content: 'Enrico Mantap',creator:'Mgr War Room'},
    {id: '2', title: 'B O C C', content: 'Asa JOSS',creator:'Mgr War Room'},
    {id: '3', title: 'DESHO', content: 'Ade TOP',creator:'Mgr War Room'}
  ]
}

const getProjectByIdReducer =  (state = initState,action) => {
  switch(action.type){
    case 'GETDATA_SUCCESS':
    //console.log(action)
    return {
      ...state,
      projects:action.key
    }
    case 'GETDATA_ERROR':
    //console.log(action)
    return{
      ...state
    }
    default:
    return state

  }
};

export default getProjectByIdReducer;