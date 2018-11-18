export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to db
    //referencing our db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        //same as project
        // project.title and project.text
        ...project,
        //since we have no auth yet so hardcoding
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
