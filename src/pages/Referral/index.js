import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

import MDBox from 'components/MDBox';
import GeneralLayout from 'layouts/GeneralLayout';
import PaymentMethod from 'components/PaymentMethod';
import BillingInformation from 'components/BillingInformation';
import DefaultInfoCard from 'components/DefaultInfoCard';

const Referral = ({ amount }) => (
  <GeneralLayout>
    <Grid container spacing={3}>
      <Grid item xs={12} md={9} xl={9}>
        <MDBox mb={2}>
          <Grid item xs={12}>
            <PaymentMethod />
          </Grid>
        </MDBox>
      </Grid>

      <Grid item xs={12} md={3} xl={3}>
        <MDBox mb={2}>
          <DefaultInfoCard icon="account_balance" title="wallet" description="Referral Return Amount" value={`${amount} KWD`} />
        </MDBox>
      </Grid>
    </Grid>
    <MDBox mb={2}>
      <Grid item xs={12}>
        <BillingInformation />
      </Grid>
    </MDBox>
  </GeneralLayout>
);

Referral.propTypes = {
  amount: PropTypes.string.isRequired,
};

export default Referral;
