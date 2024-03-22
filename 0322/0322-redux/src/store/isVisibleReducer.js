const initialState = true;

const isVisivleReducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return !state;
  }
  return state;
};

export default isVisivleReducer;
