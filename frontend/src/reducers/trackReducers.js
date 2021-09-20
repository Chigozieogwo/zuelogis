import {
  TRACK_LIST_REQUEST,
  TRACK_LIST_SUCCESS,
  TRACK_LIST_FAIL,
  TRACK_DELETE_REQUEST,
  TRACK_DELETE_SUCCESS,
  TRACK_DELETE_FAIL,
  TRACK_DETAILS_REQUEST,
  TRACK_DETAILS_SUCCESS,
  TRACK_DETAILS_FAIL,
  TRACK_UPDATE_REQUEST,
  TRACK_UPDATE_SUCCESS,
  TRACK_UPDATE_FAIL,
  TRACK_UPDATE_RESET,
  TRACK_CREATE_REQUEST,
  TRACK_CREATE_SUCCESS,
  TRACK_CREATE_FAIL,
  TRACK_NUMBER_DETAILS_REQUEST,
  TRACK_NUMBER_DETAILS_SUCCESS,
  TRACK_NUMBER_DETAILS_FAIL,
  TRACK_DETAILS_RESET,
  SHIPMENT_HISTORY_REQUEST,
  SHIPMENT_HISTORY_SUCCESS,
  SHIPMENT_HISTORY_FAIL
} from '../constants/trackConstants.js'

export const trackCreateReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case TRACK_CREATE_REQUEST:
      return { loading: true }
    case TRACK_CREATE_SUCCESS:
      return { loading: false, track: action.payload, success: true }
    case TRACK_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const trackHistoryReducer = (state =  { shipmentHistory: []}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case SHIPMENT_HISTORY_REQUEST:
      return { loading: true }
    case SHIPMENT_HISTORY_SUCCESS:
      return { loading: false, shipmentHistory: action.payload, success: true }
    case SHIPMENT_HISTORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const trackListReducer = (state = { tracks: [] }, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case TRACK_LIST_REQUEST:
      return { loading: true }
    case TRACK_LIST_SUCCESS:
      return {
        loading: false,
        tracks: action.payload.tracks,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case TRACK_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const trackDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case TRACK_DETAILS_REQUEST:
      return { ...state, loading: true }
    case TRACK_DETAILS_SUCCESS:
      return { loading: false, track: action.payload }
    case TRACK_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case TRACK_DETAILS_RESET:
      return { track: {} }
    default:
      return state
  }
}

export const trackNumberDetailsReducer = (state = {}, action) => {
  //   const { type, payload } = action
  switch (action.type) {
    case TRACK_NUMBER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case TRACK_NUMBER_DETAILS_SUCCESS:
      return { loading: false, track: action.payload }
    case TRACK_NUMBER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const trackUpdateReducer = (state = { track: {} }, action) => {
  switch (action.type) {
    case TRACK_UPDATE_REQUEST:
      return { loading: true }
    case TRACK_UPDATE_SUCCESS:
      return { loading: false, success: true, track: action.payload }
    case TRACK_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case TRACK_UPDATE_RESET:
      return { track: {} }
    default:
      return state
  }
}

export const trackDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TRACK_DELETE_REQUEST:
      return { loading: true }
    case TRACK_DELETE_SUCCESS:
      return { loading: false, success: true }
    case TRACK_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
