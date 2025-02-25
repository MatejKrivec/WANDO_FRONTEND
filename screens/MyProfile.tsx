import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the My Profile screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyProfile;
