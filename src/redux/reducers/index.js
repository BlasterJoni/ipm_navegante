import {combineReducers} from "redux";

import * as reducer from "./reducer";

const rootReducer = combineReducers({
  data: reducer.reducer
});

export default rootReducer;