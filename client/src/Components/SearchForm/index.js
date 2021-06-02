import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div>
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">You may search for playlist by genre here!</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search with pop, country, rock, hiphop.."
          id="term"
        />
      </div>
    </form>
    <div>
    <div className="text-center mt-3">
    <Link to="/dashboard" className="text-success">
      <button className="btn btn-md btn-warning mt-1">Back to Dashboard</button>
    </Link>
    </div>
    </div>
    </div>
  );
}

export default SearchForm;


