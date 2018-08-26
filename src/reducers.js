import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HOTELS_PENDING,
  REQUEST_HOTELS_SUCCESS,
  REQUEST_HOTELS_FAILED
} from "./constants.js"

const initialState = {
  searchField: ""
};

export const searchHotels = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state;
  }
};

const initialStateHotels = {
  isPending: false,
  robots: [],
  error: ""
}

export const requestHotels = (state = initialStateHotels, action = {}) => {
  switch (action.type) {
    case REQUEST_HOTELS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_HOTELS_SUCCESS:
      return Object.assign({}, state, { hotels: action.payload, isPending: false })
    case REQUEST_HOTELS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default:
      return state;
  }
}