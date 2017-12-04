import axios from "axios";

export function setCurrentView(current) {
    return {
        type: 'SET_CURRENT_VIEW',
        payload: current
    };
}

export function fetchGallery() {
    return function (dispatch) {
        dispatch({ type: "FETCH_GALLERY" });
        axios.get("/gallery")
            .then((response) => {
                dispatch({ type: "FETCH_GALLERY_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_GALLERY_REJECTED", payload: err });
            });
    };
}