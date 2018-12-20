const initState = {
  projects: []
}

const getProjectReducer =  (state = initState,action) => {
  switch(action.type){
    case 'GETDATA_SUCCESS':
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

export default getProjectReducer;