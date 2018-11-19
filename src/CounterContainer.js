import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'ADD'}),
  add_10: () => dispatch({ type: 'ADD_10'}),
  remove: () => dispatch({ type: 'REMOVE'}),
  remove_10: () => dispatch({ type: 'REMOVE_10'}),
  reset: () => dispatch({ type: 'RESET'}),
})

const CounteComponent = ({ counter, add, add_10, remove, remove_10, reset}) => (
  <div>
    <p>{counter}</p>
    <button onClick={add}>Add</button>
    <button onClick={add_10}>Add 10</button>
    <button onClick={remove}>Remove</button>
    <button onClick={remove_10}>Remove 10</button>
    <button onClick={reset}>Reset</button>
  </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(CounteComponent);