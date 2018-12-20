const initState ={
    loginError:null,
    uid: ''
  }
  const authReducer = (state=initState, e) => {
    switch(e.type){
      case 'AUTH_SUCCESS':
      return {
        ...state,
        uid:e.response.data.uid
      }
      case 'AUTH_ERROR':
      //console.log(action)
      return{
        ...state
      }
      default:
      return state
  
    }
  };
  
    export default authReducer;
  