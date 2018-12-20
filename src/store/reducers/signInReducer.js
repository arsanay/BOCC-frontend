const initState ={
  loginError:null,
  uid: ''
}
const signInReducer = (state=initState, e) => {
  switch(e.type){
    case 'LOGIN_SUCCESS':
    console.log(e)
    return {
      ...state,
      uid:e.key
    }
    case 'LOGIN_ERROR':
    //console.log(action)
    return{
      ...state
    }
    default:
    return state

  }
};

  export default signInReducer;
