import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Quiz from './Components/Quiz/Quiz.js';
import Tracks from './Components/Tracks/Tracks'

function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = './login';
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/searchplaylists" component={Tracks} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

// Comment to test branch set-up
