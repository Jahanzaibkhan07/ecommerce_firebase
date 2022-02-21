import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import {
  LogInReducer,
  LogOutReducer,
  UpdateReducer,
  UserAuthReducer,
} from "./userAuthReducer";
export default combineReducers({
  userRegister: UserAuthReducer,
  userLogin: LogInReducer,
  userLogOut: LogOutReducer,
  userUpdate: UpdateReducer,
  dashboard: dashboardReducer,
});
