import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllProducts,
} from '../product-list/ProductListSlice';


export default function Counter() {
  const count = useSelector(selectAllProducts);
  const dispatch = useDispatch();


  

  return (
    <div>
      <div className="">
      
      
      </div>    
      
      </div>
  );
}
