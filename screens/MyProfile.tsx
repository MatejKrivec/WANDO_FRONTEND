import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

const MyProfile = () => {
  const [responseText, setResponseText] = useState('');
  const [jwtToken, setJwtToken] = useState('');
  const [users, setUsers] = useState('');

  const fetchHello = async () => {
    try {
      const response = await axios.get('https://ne3c8kkmwr.eu-central-1.awsapprunner.com/test/hello');
      setResponseText(response.data);
    } catch (error) {
      console.error(error);
      setResponseText('Error fetching data');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://ne3c8kkmwr.eu-central-1.awsapprunner.com/profiles', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setUsers(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      setUsers('Error fetching users');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the My Profile screen!</Text>
      <Button title="Call Hello Endpoint" onPress={fetchHello} />
      <Text style={styles.response}>{responseText}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter JWT Token"
        value={jwtToken}
        onChangeText={setJwtToken}
      />
      <Button title="Get Users" onPress={fetchUsers} />
      <Text style={styles.response}>{users}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default MyProfile;
