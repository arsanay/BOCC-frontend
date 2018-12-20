import axios from "axios";
const signUpReducer = e => {
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

  export default signUpReducer;
