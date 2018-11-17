const initState = {
  projects: [
    { id: "1", title: "bob marley", content: "banana" },
    { id: "2", title: "bob marley", content: "banana" },
    { id: "3", title: "bob marley", content: "banana" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
