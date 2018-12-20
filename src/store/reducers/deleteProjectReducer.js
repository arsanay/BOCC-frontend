const initState = {
    projects: []
  }
  
  const editProjectReducer =  (state = initState,action) => {
    switch(action.type){
      case 'DELETEDATA_SUCCESS':
      return {
        
      }
      case 'DELETEDATA_ERROR':
      //console.log(action)
      return{
        
      }
      default:
      return state
  
    }
  };
  
  export default editProjectReducer;