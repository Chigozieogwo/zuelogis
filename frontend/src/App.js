// eslint-disable-next-line

import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TrackListScreen from './screens/TrackListScreen.js'
import UserListScreen from './screens/UserListScreen.js'
import TrackEditScreen from './screens/TrackEditScreen.js'
import UserEditScreen from './screens/UserEditScreen.js'
import TrackCreateScreen from './screens/TrackCreateScreen.js'
import TrackDetailScreen from './screens/TrackDetailScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import DashboardScreen from './screens/DashboardScreen.js'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import ScrollToTop from './components/ScrollToTop'
import GlobalStyle from './globalStyles.js'
import { Navbar, Footer1 } from './components'

import { useDispatch, useSelector } from 'react-redux'

const user = JSON.parse(localStorage.getItem('userInfo'))
// console.log(user.name + 'Erreemmmmm')
// console.log(user.isAdmin + 'Erreemmmmm')
// console.log(user + 'Erreemmmmm')

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      <Navbar />
      <main>
        <Switch>
          <Route
            path="/admin/userlist/:pageNumber"
            component={UserListScreen}
            exact
          />
          <Route
            path="/admin/tracklist/:pageNumber"
            component={TrackListScreen}
            exact
          />

          <Route path="/login" component={LoginScreen} />
          <Route path="/admin-dashboard" component={DashboardScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/admin/tracklist" component={TrackListScreen} exact />
          <Route path="/admin/userlist" component={UserListScreen} exact />
          <Route path="/admin/tracks/create" component={TrackCreateScreen} />
          <Route path="/admin/track/:id/edit" component={TrackEditScreen} />
          <Route path="/search/:keyword" component={TrackDetailScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/track" component={HomeScreen} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </main>

      <Footer />
    </Router>
  )
}

export default App
