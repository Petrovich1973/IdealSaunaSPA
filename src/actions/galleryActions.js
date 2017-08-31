import axios from "axios";
import https from 'https';

export function setCurrentView(current) {
  return {
    type: 'SET_CURRENT_VIEW',
    payload: current,
  }
}

export function fetchGallery() {
  return function(dispatch) {
    dispatch({type: "FETCH_GALLERY"});
    axios.get("http://sava.tanko.ru/gallery") //https://idealsauna.ru/build/sauny/galereya/ http://echo.jsontest.com/key/value/one/two
      .then((response) => {
      	console.log(response.data);
        dispatch({type: "FETCH_GALLERY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
      	console.log(err);
        dispatch({type: "FETCH_GALLERY_REJECTED", payload: err})
      })
  }
}