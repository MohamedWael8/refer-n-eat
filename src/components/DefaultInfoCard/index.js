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
import React, { useState } from 'react';
// prop-types is library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { IconButton } from '@mui/material';
import Spinner from 'components/Spinner';

function DefaultInfoCard({ color, icon, title, description }) {
  const [amount, setAmount] = useState('3 KWD');
  const [timer, setTimer] = useState(false);
  return (
    <Card>
      <MDBox display="flex" justifyContent="end">
        <IconButton
          size="medium"
          color="inherit"
          className="self-end"
          onClick={() => {
            setAmount('2 KWD');
            setTimer(true);
            setTimeout(() => {
              setTimer(false);
            }, 2000);
          }}
        >
          <Icon>refresh</Icon>
        </IconButton>
      </MDBox>
      <MDBox p={2} mx={3} display="flex" justifyContent="center">
        <MDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </MDBox>
      </MDBox>
      <MDBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
        {description && (
          <MDTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </MDTypography>
        )}
        {description && !amount ? null : <Divider />}
        {amount && !timer ? (
          <MDTypography variant="h5" fontWeight="medium">
            {amount}
          </MDTypography>
        ) : (
          <MDBox display="flex" justifyContent="center">
            <Spinner />
          </MDBox>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: 'info',
  // value: '',
  description: '',
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark']),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
