import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
} from './counterSlice';

export default function Order() {
  const dispatch = useDispatch();


  return (
    <div>
      <div>

        <h1>order .js page hai </h1>
      </div>
    </div>
  );
}