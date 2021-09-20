import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate2.js'
import { listUsers, deleteUser } from '../actions/userActions.js'

const UserListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)

  const { loading, error, users, page, pages } = userList
  // console.log(users + 'ccccccttttttt')

  useEffect(() => {
    dispatch(listUsers(pageNumber))
  }, [dispatch, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
      dispatch(listUsers('', pageNumber))
    }
    // console.log('deleted....')
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
        <h1 style={{ textAlign: 'center', marginTop: '.7em' }}>User List</h1>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td style={{ fontWeight: 'bold' }} className="text-primary">
                      {user.name}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      {
                        <div className="pt-2 ms-2 mx-auto">
                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              value={user.isAdmin}
                              checked={user.isAdmin}
                              id="1"></input>
                          </div>
                        </div>
                      }
                    </td>

                    <td>
                      <a href={`/admin/user/${user._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(user._id)}>
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

export default UserListScreen
