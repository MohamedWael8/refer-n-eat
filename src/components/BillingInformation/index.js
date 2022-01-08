/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Billing page components
import Bill from 'components/Bill';

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Your Referred People
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill name="oliver liam" username="viking burrito" email="oliver@burrito.com" phoneNumber="+965 2365 7086" />
          <Bill name="lucas harper" username="stone tech zone" email="lucas@stone-tech.com" phoneNumber="+965 2634 9381" />
          <Bill name="ethan james" username="fiber notion" email="ethan@fiber.com" phoneNumber="+965 2327 8977" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;