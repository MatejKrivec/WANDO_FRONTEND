import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import the correct type
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyProfile from './screens/MyProfile';
import Wandoos from './screens/Wandoos';

// Define the Stack Param List
type RootStackParamList = {
  Home: undefined;
  MyProfile: undefined;
  Wandoos: undefined;
};

// Create Stack Navigator
const Stack = createStackNavigator();

// Home Screen with Menu
const HomeScreen = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Home'> }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('MyProfile')}
      />
      <Button
        title="Go to Wandoos"
        onPress={() => navigation.navigate('Wandoos')}
      />
    </View>
  );
};

// Main App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="Wandoos" component={Wandoos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
