import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { GeistProvider, CssBaseLine, Page } from '@geist-ui/react'

export const LayoutDefault = ({ children }) => {

  const [themeType, setThemeType] = useState('dark');

  const switchThemes = () => {
    setThemeType(lastThemeType => (lastThemeType === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <GeistProvider theme={{ type: themeType }}>
        <CssBaseLine />
        <Page dotBackdrop="true">
          {/* Page.Header */}
          <Header setThemeType switchThemes/>
          {/* Page.Content: Renders Home */}
          {children}
          {/* Page.Footer */}
          <Footer />
        </Page>
      </GeistProvider>
    </>
  )
};