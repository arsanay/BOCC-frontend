const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: action.key
      };
    default:
      return state;
  }
};

export default projectReducer;
