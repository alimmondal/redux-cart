import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../services/actions/counterAction';

const CounterTwo = () => {
    const count=useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    return (
      <div>
        <h1>Welcome to Redux</h1>
        <h3>Counter:{count}</h3>
        <button onClick={() => dispatch(increment(5))}>+</button> &nbsp;
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
    );
};

export default CounterTwo;