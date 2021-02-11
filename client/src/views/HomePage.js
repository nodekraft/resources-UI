import React from 'react';
import { 
  Page,
  Grid, 
  Text,
  Button
} from '@geist-ui/react'


export const HomePage = () => {

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
        <Grid xs={12} gap="5">
          <Text h2 type="error">For developers</Text>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          
        </Grid>
        <Grid xs={12}>
          <Text h2 type="success">For designers</Text>
          <Button size="mini">Title</Button>
          <Button size="mini">Courses</Button>
          <Button size="mini">Browser Extensions</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
          <Button size="mini">Title</Button>
        </Grid>
      </Grid.Container>
    </Page.Content>
  );
}

