import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import gallery from "./galleryReducer"

export default combineReducers({
  tweets,
  user,
  gallery,
})
