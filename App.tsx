import { StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const theme: Theme = useMemo(() => ({
    ...DefaultTheme, colors: {
      background: '#f5f5f5',
      text: "#191919",
      border: '#D9D9D9' , 
      primary : '#191919'
    }
  }), [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={theme}>
        <StatusBar style='dark' />
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
