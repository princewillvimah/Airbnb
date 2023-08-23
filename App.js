import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet,StatusBar} from 'react-native';

import Router from './src/navigation/Router';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Router/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginTop:0,
  },
});
