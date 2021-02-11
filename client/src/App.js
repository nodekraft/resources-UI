import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { LayoutDefault } from './layouts/LayoutDefault';
import { HomePage } from './views/HomePage'

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route 
      {...rest} 
      render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      } />
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <RouteWrapper path="/" component={HomePage} layout={LayoutDefault} />
      </Switch>
    </Router>
  );
}



export default App;
