import axios from 'axios'
 const createProject = (project) => {
    return async (dispatch, getState)=>{
        {
           // make async call to database
            dispatch({ type: 'CREATE_PROJECT', project });
             }
    }
 }
    const getProject = (project) =>{
        return async (dispatch, getState)=>{
            try{
                const response = await axios.get('http://localhost:8081/task/');
                dispatch({type:'GETDATA_SUCCESS', key:response.data.task})
            }
            catch(err){
                dispatch({type:'GETDATA_ERROR',key:err})
            }
        }
    }

    const getProjectById = (props) =>{
       console.log(props)
        return async (dispatch, getState)=>{
            try{
                
                const response = await axios.get(`http://localhost:8081/task/`);
                dispatch({type:'GETDATA_SUCCESS', key:response.data.task})
                
            }
            catch(err){
                dispatch({type:'GETDATA_ERROR',key:err})
            }
        }
    }
export {
    createProject,
    getProject,
    getProjectById
}