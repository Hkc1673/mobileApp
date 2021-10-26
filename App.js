import React from 'react'
import Router from './src/pages/Router/Router'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>

  )
}

export default App
