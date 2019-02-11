import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

//we are accessing only the firebase property from rootReducer
const Navbar = props => {
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Planner
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
//navbar is always mostly nested in App.js
export default connect(mapStateToProps)(Navbar);
