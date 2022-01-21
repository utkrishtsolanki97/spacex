import React, { Fragment, useEffect, useState } from 'react'
import Tile from '../Components/Tile'
import {
  Col,
  Row,
  Spinner,
} from 'react-bootstrap'
import './HomePage.scss'

const HomePage = (props) => {
  const [filterActive, setFilterActive] = useState(false)
  const [filteredArray, setFilteredArray] = useState([])
  const [launchFilter, setLaunchFilter] = useState('')
  const [landingFilter, setlandingFilter] = useState('')
  const [yearFilter, setYearFilter] = useState('')

  const years = [
    { id: '1', name: '2006', value: '2006' },
    { id: '2', name: '2007', value: '2007' },
    { id: '3', name: '2008', value: '2008' },
    { id: '4', name: '2009', value: '2009' },
    { id: '5', name: '2010', value: '2010' },
    { id: '6', name: '2011', value: '2011' },
    { id: '7', name: '2012', value: '2012' },
    { id: '8', name: '2013', value: '2013' },
    { id: '9', name: '2014', value: '2014' },
    { id: '10', name: '2015', value: '2015' },
    { id: '11', name: '2016', value: '2016' },
    { id: '12', name: '2017', value: '2017' },
    { id: '13', name: '2018', value: '2018' },
    { id: '14', name: '2019', value: '2019' },
    { id: '15', name: '2020', value: '2020' },
  ]
  useEffect(() => {
    if (launchFilter !== '' || landingFilter !== '' || yearFilter !== '') {
      setFilterActive(true)
      let temp = props.launches
      if (launchFilter !== '') {
        if (launchFilter === 'true') {
          temp = temp.filter((item) => item.launch_success === true)
        }
        if (launchFilter === 'false') {
          temp = temp.filter((item) => item.launch_success === false)
        }
      }
      if (landingFilter !== '') {
        if (landingFilter === 'true') {
          temp = temp.filter(
            (item) => item.rocket.first_stage.cores[0].landing_intent === true
          )
        }
        if (landingFilter === 'false') {
          temp = temp.filter(
            (item) => item.rocket.first_stage.cores[0].landing_intent === false
          )
        }
      }
      if (yearFilter !== '') {
        temp = temp.filter((item) => item.launch_year === yearFilter)
      }
      setFilteredArray(temp)
    }
    if (launchFilter === '' && landingFilter === '' && yearFilter === '') {
      setFilterActive(false)
    }
  }, [launchFilter, landingFilter, yearFilter])

  const handleLaunchFilter = (e) => {
    if (launchFilter === '') {
      setLaunchFilter(e.target.value)
    } else if (launchFilter === e.target.value) {
      setLaunchFilter('')
    } else {
      setLaunchFilter(e.target.value)
    }
  }

  const handleLandingFilter = (e) => {
    if (landingFilter === '') {
      setlandingFilter(e.target.value)
    } else if (landingFilter === e.target.value) {
      setlandingFilter('')
    } else {
      setlandingFilter(e.target.value)
    }
  }

  const handleYearFilter = (e) => {
    if (yearFilter === '') {
      setYearFilter(e.target.value)
    } else if (yearFilter === e.target.value) {
      setYearFilter('')
    } else {
      setYearFilter(e.target.value)
    }
  }

  return (
    <Fragment>
      <div className='app'>
        <h1>SpaceX Launch Programs</h1>
        <Row>
          <Col xs={12} sm={3}>
            <div>
              <div className='filter'>
                <h3>Filters</h3>
              </div>
              <div className='filter'>
                <h2>Launch Year</h2>
                {years.map((year) => (
                  <button
                    className={
                      yearFilter === year.value
                        ? 'activeButton'
                        : 'inactiveButton'
                    }
                    key={year.id}
                    value={year.value}
                    onClick={handleYearFilter}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
              <div className='filter'>
                <h2>Successful Launch</h2>
                <div>
                  <button
                    className={
                      launchFilter === 'true'
                        ? 'activeButton'
                        : 'inactiveButton'
                    }
                    value={true}
                    id='launch-true'
                    onClick={handleLaunchFilter}
                  >
                    true
                  </button>
                  <button
                    className={
                      launchFilter === 'false'
                        ? 'activeButton'
                        : 'inactiveButton'
                    }
                    value={false}
                    id='launch-true'
                    onClick={handleLaunchFilter}
                  >
                    false
                  </button>
                </div>
              </div>
              <div className='filter'>
                <h2>Successful Landing</h2>
                <div>
                  <button
                    className={
                      landingFilter === 'true'
                        ? 'activeButton'
                        : 'inactiveButton'
                    }
                    value={true}
                    id='launch-true'
                    onClick={handleLandingFilter}
                  >
                    true
                  </button>
                  <button
                    className={
                      landingFilter === 'false'
                        ? 'activeButton'
                        : 'inactiveButton'
                    }
                    value={false}
                    id='launch-true'
                    onClick={handleLandingFilter}
                  >
                    false
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={9}>
            {props.loading && <Spinner animation='border' /> }
            <Row>
              {filterActive
                ? filteredArray.map((launch) => {
                    return (
                      <Col
                        key={launch.flight_number}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                      >
                        <Tile details={launch} />
                      </Col>
                    )
                  })
                : props.launches &&
                  props.launches.map((launch) => {
                    return (
                      <Col
                        key={launch.flight_number}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                      >
                        <Tile details={launch} />
                      </Col>
                    )
                  })}
            </Row>
            {filterActive && filteredArray.length === 0 && (
              <h2>Sorry no result found</h2>
            )}
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default HomePage
