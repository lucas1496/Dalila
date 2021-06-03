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
      <div className="bigcontainerLogged">
      <iframe src='https://my.spline.design/loggedin-1825477584b930b7dee21233721b9765/' frameBorder='0' width='100%' height='100%'></iframe>
        <div className ="contentcontainerLogged">
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>
                  Hi, <b>{user.name.split(' ')[0]}! </b>
                </h1>
                <h3>
                  You are Successfully logged in to Dalila,  let's find you some tunes!
                </h3>
                <div className="text-center">
                <p className="text-center">Ready to begin?</p>
                        <Link to="/quiz" className="text-dark">
                          <button className="btn btn-md btn-dark mt-1 big-button">Start Quiz</button>
                        </Link>
                        <br></br>
                        <br></br>
                        <p className="text-center">Want to search?</p>
                        <Link to="searchplaylists" className="text-dark">
                          <button className="btn btn-md btn-dark mt-1 big-button">Search Playlists</button>
                        </Link>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
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
