import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
// import { Button } from '../globalStyles.js'
import { NavItemBtn, NavBtnLink } from '../components/Navbar/Navbar.elements'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const DashboardScreen = ({ location, history }) => {
  //   const userLogin = useSelector((state) => state.userLogin)
  //   const { userInfo } = userLogin

  const userInfo = JSON.stringify(localStorage.getItem('userInfo'))
  return (
    <FormContainer>
      <div
        className="p-2 ms-3 me-3 mt-4 mb-5"
        style={{ border: '3px  solid #2C3E50' }}>
        <h1 style={{ textAlign: 'center' }}>Dashboard</h1>

        {userInfo ? (
          <Card>
            <Card.Body>
              <NavBtnLink to="/admin/tracks/create">
                <Button style={{ width: '25em' }} primary>
                  Create Tracks
                </Button>
              </NavBtnLink>

              <NavBtnLink to="/admin/tracklist">
                <Button style={{ width: '25em' }} primary>
                  Track List
                </Button>
              </NavBtnLink>
              <NavBtnLink to="/admin/userlist">
                <Button style={{ width: '25em' }} primary>
                  User List
                </Button>
              </NavBtnLink>
            </Card.Body>
          </Card>
        ) : null}
      </div>
    </FormContainer>
  )
}

export default DashboardScreen
