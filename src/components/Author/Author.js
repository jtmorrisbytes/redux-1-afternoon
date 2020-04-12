import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Author.css";
import store, { UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from "../../store";
class Author extends Component {
  constructor(props) {
    const reduxStore = store.getState();
    super(props);
    this.state = {
      authorFirst: reduxStore.authorFirst,
      authorLast: reduxStore.authorLast
    };
  }
  componentDidMount() {
    let reduxStore = store.getState;
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        authorFirst: reduxStore.authorFirst,
        authorLast: reduxStore.authorLast
      });
    });
  }
  handleAuthorFirstChange(nameVal) {
    this.setState({
      authorFirst: nameVal
    });
  }

  handleAuthorLastChange(nameVal) {
    this.setState({
      authorLast: nameVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    store.dispatch({
      type: UPDATE_FIRST_NAME,
      payload: this.state.authorFirst
    });
    store.dispatch({
      type: UPDATE_LAST_NAME,
      payload: this.state.authorLast
    });
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  render() {
    return (
      <div className="Author forms">
        <div className="input_container">
          <h2>Author First Name:</h2>
          <input
            value={this.state.authorFirst}
            onChange={e => this.handleAuthorFirstChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Author Last Name:</h2>
          <input
            value={this.state.authorLast}
            onChange={e => this.handleAuthorLastChange(e.target.value)}
          />
        </div>
        <Link to="/add/name">
          <button onClick={() => this.saveChanges()} className="left_button">
            Previous
          </button>
        </Link>
        <Link to="/add/ingredients">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Author;
