import React from 'react';
import { connect } from 'react-redux';
import { ping } from '../actions';

let App = (props) => (
  <div>
    <h1>is pinging: {props.isPinging.toString()}</h1>
    <button onClick={props.ping}>Start PING</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(App);

export default App;
