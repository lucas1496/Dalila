import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser, setCurrentUser } from '../../redux/actions/authActions';
import { Link, Redirect } from 'react-router-dom';
import logo from "../../assets/dalilalogo.png"
import './Navbar.css';

class Navbar extends Component {
  state = {
    showLogout: false
  }
  

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.setState({showLogout: true});
  };

  
  render() {
    console.log(this.state.showLogout);
    if (this.state.showLogout === true) {
     return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand border-none" to="/">
            <img src= {logo} />
          </Link>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <div>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-login button-outline-none"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-register button-outline-none"
                      to="/register"
                    >
                      Signup
                    </Link>
                  </li>
                </div>
            </ul>
          </div>
        </div>
      </nav>
     );
   } else if (this.state.showLogout === false) {
     console.log(this.state.showLogout);
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand border-none" to="/">
            <img src= {logo} />
          </Link>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              
              <div>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-login button-outline-none"
                    to="/login"
                  >
                    Dashboard
                  </Link>
                </li>
              </div>
              <div>
                <li className="nav-item">
                  <button
                    onClick={this.onLogoutClick}
                    className="nav-link btn btn-register button-outline-none"
                  >
                    Logout
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
   }

  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
