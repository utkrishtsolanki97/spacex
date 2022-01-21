import {
  DATA_LOAD_FAIL,
  DATA_LOAD_REQUEST,
  DATA_LOAD_SUCCESS,
} from '../constants/spacexConstants'

export const spacexDataReducer = (state = { }, action) => {
  switch (action.type) {
    case DATA_LOAD_REQUEST:
      return {
        loading: true,
        missionList: [],
      }
    case DATA_LOAD_SUCCESS:
      return {
        loading: false,
        missionList: action.payload,
      }
    case DATA_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
