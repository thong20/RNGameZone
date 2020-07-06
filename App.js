import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
// components
import Drawer from './routes/Drawer'
import HomeStack from './routes/HomeStack';

const getFonts = () => Font.loadAsync({
  'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

