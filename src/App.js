import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMissions } from './actions/spacexActions'
import HomePage from './Pages/HomePage'

const App = () => {
  const dispatch = useDispatch()

  const missionData = useSelector((state) => state.launchList)
  const { loading, missionList } = missionData


  React.useEffect(() => {
    dispatch(loadMissions())
  }, [])

  return (
    <div>
      <HomePage launches={missionList} loading={loading} />
    </div>
  )
}

export default App
