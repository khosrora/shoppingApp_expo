import { StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const theme: Theme = useMemo(() => ({
    ...DefaultTheme, colors: {
      background: '#f5f5f5',
      text: "#191919",
      border: '#D9D9D9',
      primary: '#191919'
    }
  }), [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={theme}>
          <StatusBar style='dark' />
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: 'ltr'
  },
});
