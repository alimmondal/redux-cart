import React from 'react'
import {connect} from 'react-redux';
import { increment, decrement } from '../services/actions/counterAction';

function Counter({increment, decrement, count}) {

  return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      <h3>Counter:{count}</h3>
      <button onClick={() => increment(5)}>+</button> &nbsp;
      <button onClick={() => decrement(1)}>-</button>
    </div>
  );
}

const mapStateToProp=(state)=> ({
  count: state.counterReducer.count
})

export default connect(mapStateToProp, {increment, decrement})(Counter);
