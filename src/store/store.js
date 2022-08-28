import { combineReducers } from "redux";
import photo from "./reducers/photoSlice";
import status from "./reducers/showComponentStatus";

export default combineReducers({
    photo,
    status
})