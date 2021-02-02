import React, { useState } from 'react';
import { 
  GeistProvider, 
  CssBaseline, 
  Page,
  Grid, 
  Text
} from '@geist-ui/react'

// TODO: IMPORT SECTIONS (excluding Header and Footer, which is in layout)

// Examples:
//  import Hero from '../components/sections/Hero';
//  import FeaturesTiles from '../components/sections/FeaturesTiles';
//  import FeaturesSplit from '../components/sections/FeaturesSplit';
//  import Testimonial from '../components/sections/Testimonial';
//  import Cta from '../components/sections/Cta';

import Header from './../components/layout/Header'
import Footer from './../components/layout/Footer'

const Home = () => {

  return (
    <Page.Content>
      {/* Content Title */}
      <Grid.Container gap="2" justify="center">
        <Grid xs={24}>
          <Text h1 b>Free resources for developers and designers.</Text>
          <Text p>A comprehensive list of available tools and technologies for creating digital products in the engineering and design spaces.</Text>
        </Grid>
      </Grid.Container>
      {/* Tag Section */}
      <Grid.Container gap="2" justify="center">
        <Grid xs={12}>
          <Text h2 type="error">For developers</Text>
        </Grid>
        <Grid xs={12}>
          <Text h2 type="success">For designers</Text>
        </Grid>
      </Grid.Container>
    </Page.Content>
  );
}

export default Home;

