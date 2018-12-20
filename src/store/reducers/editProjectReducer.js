const initState = {
    projects: []
  }
  
  const editProjectReducer =  (state = initState,action) => {
    switch(action.type){
      case 'EDITDATA_SUCCESS':
      return {
        ...state,
        projects:action.key
      }
      case 'EDITDATA_ERROR':
      //console.log(action)
      return{
        ...state
      }
      default:
      return state
  
    }
  };
  
  export default editProjectReducer;