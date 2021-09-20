import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate.js'
import { trackListAction, deleteTrackAction } from '../actions/trackActions.js'

const TrackListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const trackList = useSelector((state) => state.trackList)
  const { loading, error, tracks, page, pages } = trackList
  console.log(tracks + 'ccccccttttttt')

  useEffect(() => {
    dispatch(trackListAction(pageNumber))
  }, [dispatch, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTrackAction(id))
      dispatch(trackListAction('', pageNumber))
    }
   
  }

  return (
    <>
      <div
        className="p-2 ms-3 me-3 mt-4 mb-5"
        style={{ border: '3px  solid #2C3E50' }}>
        <Link to="/admin-dashboard" className="btn btn-primary my-3">
          {' '}
          Dashboard{' '}
        </Link>
        <h1 style={{ textAlign: 'center', marginTop: '.7em' }}>Track List</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div style={{ marginLeft: '3em', marginRight: '3em' }}>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Receiver Name</th>
                  <th>Receiver Email</th>
                  <th>Sender Name</th>
                  <th>Track Number</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track, index) => (
                  <tr key={track._id}>
                    <td>{index + 1}</td>
                    <td style={{ fontWeight: 'bold' }} className="text-primary">
                      {track.name2}
                    </td>
                    <td>{track.email2}</td>
                    <td>{track.name}</td>
                    <td style={{ fontWeight: 'bold' }} className="text-primary">
                      {track.trackNumber}
                    </td>
                    <td>{track.origin}</td>
                    <td>{track.destination}</td>
                    <td>{track.status}</td>

                    <td>
                      <a href={`/admin/track/${track._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(track._id)}>
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        <div className="mt-4  d-flex justify-content-center">
          <Paginate pages={pages} page={page} />
        </div>
      </div>
    </>
  )
}

export default TrackListScreen
