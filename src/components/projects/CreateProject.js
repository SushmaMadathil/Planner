import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
//has to be class based as we will be storing the data what user types in a local state
export class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    //console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    //
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="./signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchProps
)(CreateProject);
