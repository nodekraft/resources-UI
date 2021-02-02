import React, { useState } from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react'

// Test button
import { Button } from '@geist-ui/react'

const App = () => {

  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(lastThemeType => (lastThemeType === 'dark' ? 'light' : 'dark'))
  }

  return (
    <GeistProvider theme={{ type: themeType }}>
    <CssBaseline /> 
    <Button onClick={switchThemes}>Click Me</Button>
  </GeistProvider>
  )
}


export default App;
