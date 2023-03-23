import { View, Text } from 'react-native'
import React from 'react'
import { AlertNotificationRoot } from 'react-native-alert-notification';
import MainNav from './src/navigation'


const App = () => {
  return (
    <AlertNotificationRoot theme='dark'>
    <MainNav />
    </AlertNotificationRoot>
  )
}

export default App