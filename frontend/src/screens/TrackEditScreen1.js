import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button ,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {
  trackDetailsAction,
  updateTrackAction,
} from '../actions/trackActions.js'
import {
  TRACK_UPDATE_RESET,
  TRACK_DETAILS_RESET,
} from '../constants/trackConstants'


const TrackEditScreen = ({ match, history }) => {
    const trackId = match.params.id
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
  
    const [name2, setName2] = useState('')
    const [email2, setEmail2] = useState('')
    const [phoneNumber2, setPhoneNumber2] = useState('')
    const [address2, setAddress2] = useState('')
  
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [status, setStatus] = useState('')
    const [weight, setWeight] = useState('')
    const [items, setItems] = useState('')
    const [qty, setQty] = useState('')
    const [pack, setPack] = useState('')
    const [typeOfShipment, setTypeOfShipment] = useState('')
    const [pickUpTime, setPickUpTime] = useState('')
    const [carrierRefNo, setCarrierRefNo] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [trackNumber, setTrackNumber] = useState('')
  
    const dispatch = useDispatch()
  
    const trackDetails = useSelector((state) => state.trackDetails)
  
    // console.log(trackDetails + '............................')
    const { track, loading, error } = trackDetails
  
    // console.log(track)
    // console.log(track)
    // console.log(track)
    // console.log(track)
  
    const trackUpdate = useSelector((state) => state.trackUpdate)
    
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    } = trackUpdate
  
    useEffect(() => {
      if (successUpdate) {
        dispatch({ type: TRACK_UPDATE_RESET })
        history.push('/admin/tracklist')
      } else {
        if (!track) {
          console.log(track)
          dispatch(trackDetailsAction(trackId))
        } else {
          setName(track.name)
          setEmail(track.email)
          setPhoneNumber(track.phoneNumber)
          setAddress(track.address)
  
          setName2(track.name2)
          setEmail2(track.email2)
          setPhoneNumber2(track.phoneNumber2)
          setAddress2(track.address2)
  
  
          setOrigin(track.origin)
          setDestination(track.destination)
          setStatus(track.status)
          setWeight(track.weight)
          setItems(track.items)
          setQty(track.qty)
          setPack(track.pack)
          setTypeOfShipment(track.typeOfShipment)
          setPickUpTime(track.pickUpTime)
          setCarrierRefNo(track.carrierRefNo)
          setDepartureTime(track.departureTime)
          setPickUpDate(track.pickUpDate)
          setTrackNumber(track.trackNumber)
  
  
          
        }
      }
    }, [dispatch, history, trackId, track, successUpdate])
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(
        updateTrackAction({
          _id: trackId, name,
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
  
        })
      )
    }
    const resetHandler = (e) => {
      e.preventDefault()
      dispatch({ type: TRACK_DETAILS_RESET })
      localStorage.removeItem('track_Details')
      history.push('/admin/tracklist')
    }
  
    return (
      <>
      
        <div className="ms-3 me-3 mb-5 mt-5 p-4" style={{ border: '2px  solid #2C3E50' }}>

        <Link onClick={resetHandler} to="/admin/tracklist" className="btn btn-primary my-3"> Go Back </Link>
        <FormContainer>
          <h1 style={{ textAlign: 'center' }}>Edit Track</h1>
          {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
              <Row
                className="mt-3 mb-3 pb-4 pt-4"
                style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}>
                <Col sm={6}>
                  <h6 style={{ textAlign: 'center' }}>
                    <span
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      {' '}
                      TRACK NUMBER{' '}
                    </span>
                  </h6>
                  <Form.Group controlId="trackNumber">
                    <Form.Label>Track Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Track Number"
                      value={trackNumber}
                      onChange={(e) =>
                        setTrackNumber(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              {/* <h1>Receiver side</h1> */}
              <Row
                className="mt-3 mb-3 pb-4 pt-4"
                style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}>
                <h6 style={{ textAlign: 'center' }}>
                  <span
                    style={{ fontWeight: 'bolder' }}
                    className=" text-primary">
                    {' '}
                    RECEIVER DETAILS{' '}
                  </span>
                </h6>
                <Col md={3} sm={6}>
                  <Form.Group controlId="name2">
                    <Form.Label>Receiver Name</Form.Label>
                    <Form.Control
                      type="name2"
                      placeholder="Enter name"
                      value={name2}
                      onChange={(e) => setName2(e.target.value)}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} sm={6}>
                  <Form.Group controlId="email2">
                    <Form.Label>Receiver Email</Form.Label>
                    <Form.Control
                      type="email2"
                      placeholder="Receiver Email"
                      value={email2}
                      onChange={(e) =>
                        setEmail2(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} sm={6}>
                  <Form.Group controlId="phoneNumber2">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Receiver Phone Number"
                      value={phoneNumber2}
                      onChange={(e) =>
                        setPhoneNumber2(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} sm={6}>
                  <Form.Group controlId="address2">
                    <Form.Label>Receiver Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Receiver address"
                      value={address2}
                      onChange={(e) =>
                        setAddress2(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              {/* <h>shipper side</h1> */}
              <Row
                className="mt-3 mb-3 pb-4 pt-4"
                style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}>
                <h6 style={{ textAlign: 'center' }}>
                  <span
                    style={{ fontWeight: 'bolder' }}
                    className=" text-primary">
                    {' '}
                    SHIPPER DETAILS{' '}
                  </span>
                </h6>
                <Col md={3} sm={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} sm={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Shipper Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} sm={6}>
                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={(e) =>
                        setPhoneNumber(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} sm={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      value={address}
                      onChange={(e) =>
                        setAddress(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row
                className="mt-3 mb-3 pb-4 pt-4"
                style={{ border: '.5px  solid #2C3E50', borderRadius: '15px' }}>
                <h4 style={{ textAlign: 'center' }}>
                  <span
                    style={{ fontWeight: 'bolder' }}
                    className=" text-primary">
                    {' '}
                    CONSIGNMENT DETAILS{' '}
                  </span>
                </h4>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="origin">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Origin
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Origin"
                      value={origin}
                      onChange={(e) =>
                        setOrigin(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="destination">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Destination
                    </Form.Label>
                    <Form.Control
                      type="destination"
                      placeholder="Destination"
                      value={destination}
                      onChange={(e) =>
                        setDestination(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="status">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Status
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Status"
                      value={status}
                      onChange={(e) =>
                        setStatus(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="weight">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Weight
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Weight"
                      value={weight}
                      onChange={(e) =>
                        setWeight(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>

                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="items">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Items
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Items"
                      value={items}
                      onChange={(e) => setItems(e.target.value)}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="qty">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Quantity
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Quantity"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="pack">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Package
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Package"
                      value={pack}
                      onChange={(e) => setPack(e.target.value)}></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="typeOfShipment">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Type Of Shipment
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type Of Shipment"
                      value={typeOfShipment}
                      onChange={(e) =>
                        setTypeOfShipment(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>

                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="pickUpTime">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Pick-Up-Time
                    </Form.Label>
                    <Form.Control
                      type="name2"
                      placeholder="Pick Up Time"
                      value={pickUpTime}
                      onChange={(e) =>
                        setPickUpTime(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="Carrier Ref No">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Carrier Ref No.
                    </Form.Label>
                    <Form.Control
                      type="email2"
                      placeholder="Carrier Ref No."
                      value={carrierRefNo}
                      onChange={(e) =>
                        setCarrierRefNo(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="DepartureTime">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Departure Time
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Departure Time"
                      value={departureTime}
                      onChange={(e) =>
                        setDepartureTime(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={4} sm={6}>
                  <Form.Group className="mb-3" controlId="pickUpDate">
                    <Form.Label
                      style={{ fontWeight: 'bolder' }}
                      className=" text-primary">
                      Pick-Up-Date
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="pick Up Date"
                      value={pickUpDate}
                      onChange={(e) =>
                        setPickUpDate(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  className="mt-4"
                  size="lg"
                  type="submit"
                  variant="primary">
                  Update Track
                </Button>
              </div>
            </Form>
          )}
        </FormContainer>


        </div>
        </>
  )
}

export default TrackEditScreen