import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment10, increment1, decrement1, decrement10 } from './actions';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment10())}>+10</button>
      <button onClick={() => dispatch(increment1())}>+1</button>
      <button onClick={() => dispatch(decrement1())}>-1</button>
      <button onClick={() => dispatch(decrement10())}>-10</button>
    </>
  );
};

export default App;
