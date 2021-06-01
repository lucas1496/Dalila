import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
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
                      <p>
                        Ready to Search?
                        <Link to="/searchplaylists" className="text-success">
                          Start Search Playlist
                        </Link>
                      </p>
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
