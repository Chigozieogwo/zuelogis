import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-bootstrap'
// import React, { useEffect } from 'react'
// import { Route } from 'react-router-dom'
// import SearchBox from '../components/SearchBox.js'
import { useDispatch, useSelector } from 'react-redux'
import { trackNumberDetailsAction } from '../actions/trackActions.js'
import imageLogo from '../img/showcase.svg'
import imageLogo2 from '../img/1211.png'

const HomeScreen = ({ history }) => {
  const [trackNumber, setTrackNumber] = useState('')

  const dispatch = useDispatch()
  const trackNumberDetails = useSelector((state) => state.trackNumberDetails)
  const { loading, error, track } = trackNumberDetails

  JSON.stringify(track)
  // console.log(JSON.stringify(track) + '<<<<<< Found Track Record >>>>>')
  // console.log(track + '<<<<<< Found Track Record >>>>>')
  // console.log(JSON.stringify(track) + '<<<<<< Found Track Record >>>>>')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('clicked.....')
    if (trackNumber.trim()) {
      // console.log(trackNumber)
      // console.log(trackNumber)
      // console.log(trackNumber)

      dispatch(trackNumberDetailsAction(trackNumber.trim()))
      // history.push(`/api/tracks/admin/tracks?trackNumber=${trackNumber}`)
      history.push(`/search/${trackNumber.trim()}`)
    } else {
      history.push('/')
    }
  }

  return (
    <div>
      {/* <Form onSubmit={submitHandler} inline>
        <Form.Control
          type="text"
          onChange={(e) => setTrackNumber(e.target.value)}
          placeholder="Search Tracks..."
          className="mr-sm-2 ml-sm-5"></Form.Control>
        <Button type="submit" variant="outline-success" className="p-2">
          Search
        </Button>
      </Form>
      <h1>Track Record</h1> */}
      <section class="bg-primary text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h5 class="mb-3 mb-md-0">Track Your Goods</h5>

            <div class="input-group news-input ">
              <input
                type="text"
                class="form-control "
                placeholder="Please Enter Your Tracking Number ................."
                onChange={(e) => setTrackNumber(e.target.value)}
              />
              <button
                onClick={submitHandler}
                class="btn btn-info btn-lg "
                type="button">
                Track Consignment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                The Leading <span class="text-warning"> Logistic Company </span>
              </h1>
              <p class="lead my-4">
                We handle freight of all kinds, to / from USA, West and Eastern
                Europe, Asian Tigers territories, Middle East and Africa with
                network spanning more than 47 locations in 43 countries around
                the world
              </p>

              {/* <button
                href="/"
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll">
                Start Tracking
              </button> */}
            </div>
            <img
              class="img-fluid w-50 d-none d-sm-block"
              src={imageLogo}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <div>
        {
          <Row>
            {!track
              ? ''
              : track.map((track) => (
                  <Col key={track._id} sm={12} md={6} lg={4} xl={3}>
                    <h1>{track.name}</h1>
                  </Col>
                ))}
          </Row>
        }
        
      </div> */}
    </div>
  )
}

export default HomeScreen
