export const createProject = project => {
  //we are interacting with the firebase here
  //react-redux-firebase package provides bindings to the firebase service as a whole
  //redux-firestore package provides redux bindings for firestore in particular
  // these two packages will help in using the firebase api in interacting with the database
  //we will be able to sync our firebase with the project

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    // we are using this method to pause the action untill data from database is fetched and then we dispatching the data.
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    //adding data in firestore collection takes a little bit of time hence we cannot dispatch data until its done
    //hence the then method is added which will fire only when the task is complete
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
