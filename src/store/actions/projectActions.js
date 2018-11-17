export const createProject = project => {
  return (dispatch, getState) => {
    //async call to db
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
