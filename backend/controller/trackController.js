import asyncHandler from 'express-async-handler'
import Track from '../model/trackModel.js'

// @desc    Create a track
// @route   POST /api/tracks
// @access  Private/Admin
const createTrack = asyncHandler(async (req, res) => {
  const {
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
  } = req.body

  const track = new Track({
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
  })

  const createdTrack = await track.save()
  res.status(201).json(createdTrack)
})

// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getTracks = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Track.countDocuments()
  const tracks = await Track.find()
    .limit(pageSize)
    .sort('-createdAt')
    .skip(pageSize * (page - 1))

  res.json({ tracks, page, pages: Math.ceil(count / pageSize) })
})
// @desc    Get all tracks
// @route   GET /api/tracks
// @access  Private/Admin

const getTracksKeyword = asyncHandler(async (req, res) => {
  const searchField = req.query.trackNumber
  // Track.find({ trackNumber: { $regex: searchField, $options: '$i' } }).then(
  //   (data) => {
  //     res.send(data)
  //   }
  // )

  const track = await Track.find({ trackNumber: searchField })

  if (track.length === 0) {
    res.status(404).json({ msg: 'Track not Found' })
  } else {
    res.json(track)
  }
})

// @desc    Fetch single track record
// @route   GET /api/tracks/:track-number
// @access  Public
const getTracks1 = asyncHandler(async (req, res) => {
  const track = await Track.find().sort('-createdAt')

  if (track) {
    res.json(track)
  } else {
    res.status(404)
    throw new Error('Track Records not found')
  }
})
// @desc    Fetch single track record
// @route   GET /api/tracks/:track-number
// @access  Public
const getTrackByNumber = asyncHandler(async (req, res) => {
  const track = await Track.findOne({ trackNumber: req.body.trackNumber })

  if (track) {
    res.json(track)
  } else {
    res.status(404)
    throw new Error('Track Number Record not found')
  }
})

// @desc    Fetch single Track Record
// @route   GET /api/tracks/:id
// @access  Public
const getTrackById = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id)

  if (track) {
    res.json(track)
  } else {
    res.status(404)
    throw new Error('Track Record not found')
  }
})
const createShipmentHistory = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id)

  const newShipmentHistory = {
    data_history : req.body.data_history,
    location_history : req.body.location_history,
    status_history : req.body.status_history,
    comment : req.body.comment
  }


  if(req.body.data_history !== "" && req.body.status_history !== "" && req.body.location_history !== "" ){

    track.shipmentHistory.unshift(newShipmentHistory)
    track.save().then(track => res.json(track))
  }else{
    res.json(track)
  }

  
  
})

// @desc    Update a Track Record
// @route   PUT /api/tracks/:id
// @access  Private/Admin
const updateTrack = asyncHandler(async (req, res) => {
  const {
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
  } = req.body

  const track = await Track.findById(req.params.id)

  if (track) {
    

    track.name = name
    track.email = email
    track.phoneNumber= phoneNumber
    track.address = address

    track.name2= name2
    track.email2= email2
    track.phoneNumber2 = phoneNumber2
    track.address2 = address2

    track.origin = origin
    track.destination = destination
    track.status =status
    track.weight= weight
    track.items =items
    track.qty=qty
    track.pack=pack
    track.typeOfShipment=typeOfShipment
    track.pickUpTime=pickUpTime
    track.carrierRefNo=carrierRefNo
    track.departureTime=departureTime
    track.pickUpDate=pickUpDate
    track.trackNumber=trackNumber

    const updatedTrack = await track.save()
    res.json(updatedTrack)
  } else {
    res.status(404)
    throw new Error('Track Record not found')
  }
})

// @desc    Delete a delete
// @route   DELETE /api/tracks/:id
// @access  Private/Admin
const deleteTrack = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id)

  if (track) {
    await track.remove()
    res.json({ message: 'Track Record removed' })
  } else {
    res.status(404)
    throw new Error('Track not found')
  }
})

export {
  createTrack,
  getTracks,
  getTracksKeyword,
  getTrackById,
  getTrackByNumber,
  updateTrack,
  deleteTrack,
  createShipmentHistory
}
