import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HOTELS_PENDING,
  REQUEST_HOTELS_SUCCESS,
  REQUEST_HOTELS_FAILED
} from "./constants.js"

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestHotels = () => (dispatch) => {
  dispatch({ type: REQUEST_HOTELS_PENDING });
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_HOTELS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_HOTELS_FAILED, payload: error }))
}