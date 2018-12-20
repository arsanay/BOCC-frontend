import axios from "axios";
const createProject = e => {
  console.log(e);
  return async (dispatch, getState) => {
    try {
      const response = await axios.post("http://localhost:8081/task", {
        title: e.title,
        content: e.content,
        creator: e.creator,
        deadline: e.deadline,
        imageFile: e.imageFile,
        progress: e.progress
      });
      dispatch({ type: "CREATE_PROJECT", response });
    } catch (err) {
      dispatch({ type: "CREATE_PROJECT", key: err });
    }
    // make async call to database
  };
};
const getProject = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://localhost:8081/task/");
      dispatch({ type: "GETDATA_SUCCESS", key: response.data.task });
    } catch (err) {
      dispatch({ type: "GETDATA_ERROR", key: err });
    }
  };
};

const editProject = e => {
  const id = e.id;
  return async (dispatch, getState) => {
    try {
      const response = await axios.patch(`http://localhost:8081/task/${id}`, [
        { propName: "title", value: e.title },
        { propName: "content", value: e.content },
        { propName: "creator", value: e.creator },
        { propName: "deadline", value: e.deadline },
        { propName: "imageFile", value: e.imageFile },
        { propName: "progress", value: e.progress }
      ]);
      dispatch({ type: "EDITDATA_SUCCESS", key: response.data.task });
    } catch (err) {
      dispatch({ type: "EDITDATA_ERROR", key: err });
    }
  };
};

const deleteProject = e => {
    const id = e.id;
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(`http://localhost:8081/task/${id}`,{
       
          withCredentials: true
        
      }) 
      dispatch({ type: "DELETEDATA_SUCCESS", key: response.data.task });
    } catch (err) {
      dispatch({ type: "DELETEDATA_ERROR", key: err });
    }
  };
};
export { createProject, getProject, editProject, deleteProject };
