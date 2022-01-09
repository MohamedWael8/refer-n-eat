import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import _ from 'lodash';
import PropTypes from 'prop-types';

import MDBox from 'components/MDBox';
import GeneralLayout from 'layouts/GeneralLayout';
import GeneralNavbar from 'components/GeneralNavbar';
// import axiosInstance from 'api/apiInstance';
import DefaultProjectCard from 'components/DefaultProjectCard';
import { RESTAURANTS, RESTAURANTS_SEARCH } from 'api/RestaurantAPI';
import { useMaterialUIController } from 'context';

function Directory({ logged = false }) {
  const { controller } = useMaterialUIController();
  const { search } = controller;
  const [restaurants, setRestaurants] = useState([]);
  const serializeRestaurantData = rawRestaurants => {
    const serializedRestaurantData = rawRestaurants.map(rawRestaurant => {
      const restaurantObject = { ...rawRestaurant?.attributes, id: rawRestaurant.id };
      const restaurantObjectCamelCase = _.mapKeys(restaurantObject, (v, k) => _.camelCase(k));
      return restaurantObjectCamelCase;
    });
    return serializedRestaurantData;
  };

  const getRestaurants = async () => {
    try {
      const response = await axios.get(RESTAURANTS, {
        baseURL: process.env.REACT_APP_BACKEND_URL,
        auth: process.env.REACT_APP_AUTHORIZATION_TOKEN,
      });

      setRestaurants(serializeRestaurantData(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const searchRestaurants = async searchQuery => {
    try {
      const response = await axios.get(RESTAURANTS_SEARCH, {
        baseURL: process.env.REACT_APP_BACKEND_URL,
        auth: process.env.REACT_APP_AUTHORIZATION_TOKEN,
        params: {
          'filter[keywords_cont]': searchQuery,
        },
      });

      setRestaurants(serializeRestaurantData(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!search) getRestaurants();
  }, [search]);

  useEffect(() => {
    if (search && search !== '') {
      searchRestaurants(search);
    }
  }, [search]);

  return (
    <GeneralLayout>
      <GeneralNavbar logged={logged} />
      <MDBox mb={2} />
      <MDBox p={2}>
        <Grid container spacing={6}>
          {restaurants.map(item => (
            <Grid item key={item.id} xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={item.photoUrl}
                label={item.instaUsername}
                title={item.titleEn}
                description="As Uber works through a huge amount of internal management turmoil."
                action={
                  item.fullUrl
                    ? {
                        route: item.fullUrl,
                        color: 'info',
                        label: 'order now',
                      }
                    : {}
                }
              />
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </GeneralLayout>
  );
}

Directory.propTypes = {
  logged: PropTypes.bool,
};

export default Directory;
