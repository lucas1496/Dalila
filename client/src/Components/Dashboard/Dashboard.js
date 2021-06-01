import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';
import { Link, withRouter } from 'react-router-dom';
<<<<<<< HEAD

//The GET request is sent to the /authorize endpoint of the Accounts service
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=60fdc8cbb7ec4a3b99b95a77309e567c&response_type=code&redirect_uri=http://localhost:8080&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
=======
>>>>>>> main

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  

  render() {
  
    const { user } = this.props.auth;
    return (
        // render a button with a href and on the center of screen
  

      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>
                  Hi, <b>{user.name.split(' ')[0]}! </b>
                </h1>
                <h3>
                  You are Successfully logged in to DALILA,  let's find you some tunes!
                </h3>
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-lg btn-warning mt-5"
                >
                  Logout
                </button>
                <p>
                        Ready to start?
                        <Link to="/quiz" className="text-success">
                          Start Quiz
                        </Link>
                      </p>
<<<<<<< HEAD
                      <p>
                        Ready to start?
                        <Link to="/tracks" className="text-success">
                          Start Tracks
                        </Link>
                      </p>
                     
    <a className="btn btn-success btn-lg" href={AUTH_URL}>
      Search With Spotify
    </a>
=======
>>>>>>> main
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
