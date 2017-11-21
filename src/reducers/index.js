import { combineReducers } from "redux";

import gallery from "./galleryReducer";
import reviews from "./reviewsReducer";
import calculation from "./calculationReducer";
import articles from "./articlesReducer";

export default combineReducers({
    gallery,
    reviews,
    calculation,
    articles
});
