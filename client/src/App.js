import React, { useState } from 'react';
import { 
  GeistProvider, 
  CssBaseline, 
  Page, 
  Row,
  Col,
  Button,
  Text,
  Spacer,
  Input,
  Container,
  Grid,
  Divider,
  Tag
} from '@geist-ui/react'
import { 
  Hexagon,
  Moon, 
  Sun,
  Search
} from '@geist-ui/react-icons'

import Logo from './components/layout/partials/Logo'

const App = () => {

  const [themeType, setThemeType] = useState('dark')

  const switchThemes = () => {
    setThemeType(lastThemeType => (lastThemeType === 'dark' ? 'light' : 'dark'))
  }

  let displayIcon = 'null'

  if (themeType === 'dark') {
    displayIcon = <Moon />
  } else {
    displayIcon = <Sun />
  }

  return (
    <GeistProvider theme={{ type: themeType }}>
      <CssBaseline /> 
      <Page dotBackdrop="true">
        <Page.Header>
          <Row gap={0.8} align="middle" style={{ marginBottom: '15px', marginTop: '30px' }}>
            <Col align="start">
              <Text h3>Nodekraft Resources</Text>
            </Col>
            <Col align="end">
              <Container justify="end">
                <Input auto size="small" icon={ <Search /> } placeholder="Search" />
                <Spacer x={0.5}/>
                <Button icon={displayIcon} onClick={switchThemes} auto size="small"></Button>
              </Container>
            </Col>
          </Row>
        </Page.Header>
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
        <Page.Footer>
          {/* TODO */}
          <Text h2>Footer Here</Text>
        </Page.Footer>
      </Page>
    </GeistProvider>
  )
}


export default App;
