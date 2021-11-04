import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

export default combineReducers({
  counterReducer,
  userReducer
});


// import { combineReducers } from "redux";
// import countReducer from "./countReducer";
// import loggedReducer from "./loggedReducer";

// const AllReducers = combineReducers({
//   count: countReducer,
//   logged: loggedReducer,
// });

// export default AllReducers;
