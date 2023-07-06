import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Movielist from './src/screens/Movielist';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Movielist />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
