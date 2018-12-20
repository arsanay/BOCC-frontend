import axios from "axios";
const createUser = e => {
    console.log(e);
    return async (dispatch, getState) => {
      try {
        const response = await axios.post("http://localhost:8081/user/signup", {
          email: e.email,
          password: e.password,
          firstName: e.firstName,
          lastName: e.lastName
        });
        dispatch({ type: "CREATE_USER", response });
      } catch (err) {
        dispatch({ type: "CREATE_PROJECT", key: err });
      }
      // make async call to database
    };
  };

  const login = e => {
    console.log(e);
    return async (dispatch, getState) => {
      try {
        const response = await axios.post("http://localhost:8081/user/login", {
          email: e.email,
          password: e.password,
        },{
          withCredentials: true
        });
        console.log(response.data )
        dispatch({ type: "LOGIN_SUCCESS", key:response.data.uid })
      } catch (err) {
        dispatch({ type: "LOGIN_ERROR", key: err });
      }
      // make async call to database
    };
  };
  const logout = e => {
    console.log(e);
    return async (dispatch, getState) => {
      try {
        const response = await axios.get("http://localhost:8081/user/logout",{
          withCredentials: true
        });
        dispatch({ type: "LOGOUT_SUCCESS", response });
      } catch (err) {
        dispatch({ type: "LOGOUT_ERROR", key: err });
      }
      // make async call to database
    };
  };
  const checkAuth = e => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.get("http://localhost:8081/user/checkAuth",{
          withCredentials: true
        });
        console.log(response)
        dispatch({ type: "AUTH_SUCCESS", response });
      } catch (err) {
        dispatch({ type: "AUTH_ERROR", key: err });
      }
      // make async call to database
    };
  };

  

  export { createUser,login,logout,checkAuth};
