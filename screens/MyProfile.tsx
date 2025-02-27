import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const MyProfile = () => {
  const [responseText, setResponseText] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ne3c8kkmwr.eu-central-1.awsapprunner.com/test/hello');
      setResponseText(response.data); // Update the state with the response data
    } catch (error) {
      console.error(error);
      setResponseText('Error fetching data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the My Profile screen!</Text>
      <Button title="Call Endpoint" onPress={fetchData} />
      <Text style={styles.response}>{responseText}</Text>
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
  response: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default MyProfile;
