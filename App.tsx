import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import AdvocateRegisterScreen from './src/screens/AdvocateRegisterScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import AppNavigator from "./src/navigation/AppNavigator";


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* <AdvocateRegisterScreen /> */}
        {/* <ProfileSetupScreen /> */}
        <AppNavigator />
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;