import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyTV } from '../actions/tvActions';

const TV = () => {
  const dispatch = useDispatch();
  const tvStock = useSelector((state) => state.tv.stock);

  return (
    <div>
      <h2>TV Stock: {tvStock}</h2>
      <button onClick={() => dispatch(buyTV())}>Buy TV</button>
    </div>
  );
};

export default TV;
