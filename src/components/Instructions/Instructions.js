import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_INSTRUCTION, CREATE_RECIPE } from "../../store";
class Instructions extends Component {
  constructor(props) {
    const reduxStore = store.getState();
    super(props);
    this.state = {
      instructions: reduxStore.instructions,
      input: ""
    };
    this.updateStateFromRedux.bind(this);
  }
  updateStateFromRedux() {
    this.setState({
      instructions: store.getState().instructions
    });
  }
  componentDidMount() {
    console.log("instructions mounting");
    this.unsubscribe = store.subscribe(this.updateStateFromRedux.bind(this));
  }
  componentWillUnmount() {
    console.log("instructions unmounting");
    this.unsubscribe();
  }
  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addInstruction() {
    // Send data to Redux state
    store.dispatch({
      type: ADD_INSTRUCTION,
      payload: this.state.input
    });
    this.setState({
      input: ""
    });
  }
  create() {
    store.dispatch({
      type: CREATE_RECIPE
    });
    // Create new recipe in Redux state
  }
  render() {
    const instructions = this.state.instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });
    return (
      <div className="List forms">
        <h2>Instructions:</h2>
        <div className="form_items_container">
          <ol className="list">{instructions}</ol>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="add_button" onClick={() => this.addInstruction()}>
            Add Instruction
          </button>
        </div>
        <Link to="/add/ingredients">
          <button className="left_button">Previous</button>
        </Link>
        <Link to="/">
          <button className="right_button" onClick={() => this.create()}>
            Create
          </button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
