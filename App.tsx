/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import SignInScreen from './src/screens/signIn';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GluestackUIProvider config={config}>
        <Box
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          height="$full"
          width={'$full'}>
          <SignInScreen />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
