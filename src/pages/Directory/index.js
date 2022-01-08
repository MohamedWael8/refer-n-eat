import React from 'react';
import { useAxios } from 'use-axios-client';

import RestaurantCard from './RestaurantCard';
import axiosInstance from '../../api/apiInstance';
import { RESTAURANTS } from '../../api/RestaurantAPI';

const restaurants = ['Some', 'Things', 'Never', 'Change'];

function Directory() {
  const { data, error, loading } = useAxios({
    axiosInstance,
    url: RESTAURANTS,
  });

  console.log(data, error, loading);

  return (
    <div className="grid grid-cols-4 gap-4">
      {restaurants.map(item => (
        <div key={`${item}`}>
          <RestaurantCard />
        </div>
      ))}
    </div>
  );
}

export default Directory;
