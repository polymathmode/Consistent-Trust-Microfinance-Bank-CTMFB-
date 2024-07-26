import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Adjust the path as necessary

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;