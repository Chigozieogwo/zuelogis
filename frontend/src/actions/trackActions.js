import axios from 'axios'
import {
  TRACK_LIST_SUCCESS,
  TRACK_LIST_REQUEST,
  TRACK_LIST_FAIL,
  TRACK_DELETE_SUCCESS,
  TRACK_DELETE_FAIL,
  TRACK_DELETE_REQUEST,
  TRACK_DETAILS_REQUEST,
  TRACK_DETAILS_SUCCESS,
  TRACK_DETAILS_FAIL,
  TRACK_UPDATE_REQUEST,
  TRACK_UPDATE_SUCCESS,
  TRACK_UPDATE_FAIL,
  TRACK_CREATE_REQUEST,
  TRACK_CREATE_SUCCESS,
  TRACK_CREATE_FAIL,
  TRACK_NUMBER_DETAILS_REQUEST,
  TRACK_NUMBER_DETAILS_SUCCESS,
  TRACK_NUMBER_DETAILS_FAIL,
  SHIPMENT_HISTORY_REQUEST,
  SHIPMENT_HISTORY_SUCCESS,
  SHIPMENT_HISTORY_FAIL,
} from '../constants/trackConstants'

export const trackCreateAction = (
  name,
  email,
  phoneNumber,
  address,

  name2,
  email2,
  phoneNumber2,
  address2,

  origin,
  destination,
  status,
  weight,
  items,
  qty,
  pack,
  typeOfShipment,
  pickUpTime,
  carrierRefNo,
  departureTime,
  pickUpDate,
  trackNumber
) => async (dispatch, getState) => {
  try {
    dispatch({ type: TRACK_CREATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/tracks/admin/unicode/create`,
      {
        name,
        email,
        phoneNumber,
        address,

        name2,
        email2,
        phoneNumber2,
        address2,

        origin,
        destination,
        status,
        weight,
        items,
        qty,
        pack,
        typeOfShipment,
        pickUpTime,
        carrierRefNo,
        departureTime,
        pickUpDate,
        trackNumber,
      },
      config
    )

    dispatch({
      type: TRACK_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRACK_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const trackHistoryAction = (
  data_history,
  location_history,
  status_history,
  comment
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHIPMENT_HISTORY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    const {
      trackDetails: { track },
    } = getState()
    // const {

    //   trackDetails:{ track }
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/tracks/${track._id}`,
      data_history,
      location_history,
      status_history,
      comment,
      config
    )
    // console.log(JSON.stringify(data))

    // console.log(JSON.stringify(data) + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')
    // console.log(data + 'the history data')

    dispatch({
      type: SHIPMENT_HISTORY_SUCCESS,
      payload: data,
    })
    //  dispatch({ type: TRACK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: SHIPMENT_HISTORY_FAIL,
      payload: message,
    })
  }
}

export const trackListAction = (pageNumber = '') => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: TRACK_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/tracks?pageNumber=${pageNumber}`,
      config
    )
    //const { data } = await axios.get('/api/tracks')

    // console.log(data)

    dispatch({
      type: TRACK_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRACK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const trackNumberDetailsAction = (trackNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: TRACK_NUMBER_DETAILS_REQUEST })
    const { data } = await axios.get(
      `/api/tracks/admin/tracks?trackNumber=${trackNumber}`
    )

    console.log(data)

    dispatch({
      type: TRACK_NUMBER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TRACK_NUMBER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const trackDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TRACK_DETAILS_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/tracks/${id}`, config)
    console.log(data + '>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<')
    dispatch({
      type: TRACK_DETAILS_SUCCESS,
      payload: data,
    })
    // localStorage.setItem('track_Details', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: TRACK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const updateTrackAction = (track) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRACK_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/tracks/${track._id}`, track, config)

    dispatch({
      type: TRACK_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: TRACK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: TRACK_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const deleteTrackAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRACK_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/tracks/${id}`, config)

    dispatch({
      type: TRACK_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: TRACK_DELETE_FAIL,
      payload: message,
    })
  }
}
