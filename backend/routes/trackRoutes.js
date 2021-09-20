import express from 'express'
const router = express.Router()

import {
  createTrack,
  getTracks,
  getTrackById,
  getTrackByNumber,
  getTracksKeyword,
  updateTrack,
  deleteTrack,
  createShipmentHistory
} from '../controller/trackController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/')
            .get(protect, admin, getTracks)
router.route('/admin/unicode/create')
            .post(protect, admin,createTrack)
router.route('/admin/tracks')
            .get(getTracksKeyword)
router.route('/:id')
            .get(protect, admin,getTrackById)
            .delete(protect, admin, deleteTrack)
            .put(protect, admin,updateTrack)
            .post( createShipmentHistory)
export default router
