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
      <iframe src='https://my.spline.design/loggedin-1825477584b930b7dee21233721b9765/' frameborder='0' width='100%' height='100%'></iframe>
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
                  You are Successfully logged in to DALILA,  let's find you some tunes!
                </h3>
                <p className="text-center">
                        Ready to begin?
                        <br></br>
                        <Link to="/quiz" className="text-success">
                          <button className="btn btn-md btn-success mt-5">Start Quiz</button>
                        </Link>
                      </p>
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-lg btn-warning mt-5"
                >
                  Logout
                </button>
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
