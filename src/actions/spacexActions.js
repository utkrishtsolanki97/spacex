import axios from 'axios'
import {
  DATA_LOAD_FAIL,
  DATA_LOAD_REQUEST,
  DATA_LOAD_SUCCESS,
} from '../constants/spacexConstants'

export const loadMissions = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOAD_REQUEST })

    const missions = await axios.get(
      'https://api.spacexdata.com/v3/launches?limit=100'
    )


    dispatch({
      type: DATA_LOAD_SUCCESS,
      payload: missions.data,
    })
    
  } catch (error) {
    dispatch({
      type: DATA_LOAD_FAIL,
      payload: error.response,
    })
  }
}
