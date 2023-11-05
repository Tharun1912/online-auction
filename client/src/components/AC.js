import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyAC } from '../actions/acActions';

const AC = () => {
  const dispatch = useDispatch();
  const acStock = useSelector((state) => state.ac.stock);

  return (
    <div>
      <h2>AC Stock: {acStock}</h2>
      <button onClick={() => dispatch(buyAC())}>Buy AC</button>
    </div>
  );
};

export default AC;
