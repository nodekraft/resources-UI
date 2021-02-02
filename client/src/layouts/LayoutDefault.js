import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  GeistProvider, 
  CssBaseline, 
  Page
} from '@geist-ui/react'

const LayoutDefault = () => {

  const [themeType, setThemeType] = useState('dark')

  const switchThemes = () => {
    setThemeType(lastThemeType => (lastThemeType === 'dark' ? 'light' : 'dark'))
  }

  return (
    <GeistProvider theme={{ type: themeType }}>
      <CssBaseline /> 
      <Page dotBackdrop="true">
        {/* Page.Header */}
        <Header />
        <main>
          {/* Page.Content: Renders Home */}
        </main>
        {/* Page.Footer */}
        <Footer />
      </Page>
    </GeistProvider>
  )
};

export default LayoutDefault; 

// Plug this into App.js when routing is enabled