import React, { Fragment } from 'react'
import './Tile.scss'

const Tile = (props) => {
  const launch = props.details
  return (
    <Fragment>
      <div className='tile'>
        <div className='mission_image'>
          <img
            src={launch.links.mission_patch_small}
            alt={launch.mission_name}
          />
        </div>
        <h2>{launch.mission_name + ' #' + launch.flight_number}</h2>
        <br />
        <div>
          <span>Mission Id:</span>
          <ul className='ans'>
            {launch.mission_id > 0 ? (
              launch.mission_id.map((mission, id) => (
                <li key={id}>{mission}</li>
              ))
            ) : (
              <li>No Data</li>
            )}
          </ul>
        </div>
        <span className='head'>Launch Year: </span>
        <span className='ans'>{launch.launch_year}</span>
        <br />
        <br />
        <span className='head'>Successful Launch:</span>
        <span className='ans'>{launch.launch_success ? 'true' : 'false'}</span>
        <br />
        <br />

        <span className='head'>Successful Landing:</span>
        <span className='ans'>{launch.rocket.first_stage.cores[0].landing_intent ? 'true' : 'false'}</span>
        <br />
      </div>
    </Fragment>
  )
}

export default Tile
