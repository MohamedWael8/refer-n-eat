import React from 'react';
import { useAxios } from 'use-axios-client';
import Grid from '@mui/material/Grid';

import MDBox from 'components/MDBox';
import GeneralLayout from 'layouts/GeneralLayout';
import GeneralNavbar from 'components/GeneralNavbar';
import axiosInstance from 'api/apiInstance';
import DefaultProjectCard from 'components/DefaultProjectCard';
import { RESTAURANTS } from 'api/RestaurantAPI';

const restaurants = ['Some', 'Things', 'Never', 'Change'];

function Directory() {
  const { data, error, loading } = useAxios({
    axiosInstance,
    url: RESTAURANTS,
  });

  console.log(data, error, loading);

  return (
    <GeneralLayout>
      <GeneralNavbar />
      <MDBox mb={2} />
      <MDBox p={2}>
        <Grid container spacing={6}>
          {restaurants.map(item => (
            <Grid item key={item} xs={12} md={6} xl={3}>
              <DefaultProjectCard
                // image={homeDecor1}
                label="project #2"
                title={item}
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'view project',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </GeneralLayout>
  );
}

export default Directory;
