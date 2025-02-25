import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';

interface Wandoo {
  id: number;
  title: string;
  description: string;
  picture: string;
  genreIcon: string;
  eventDate: string;
}

const Wandoos = () => {
  const [wandoos, setWandoos] = useState<Wandoo[]>([]);
  const [newWandoo, setNewWandoo] = useState({
    title: '',
    description: '',
    picture: '',
    genreIcon: '',
    eventDate: '',
  });

  useEffect(() => {
    fetchWandoos();
  }, []);

  const fetchWandoos = async () => {
    try {
      const response = await fetch('http://localhost:3000/wandoos');
      const data = await response.json();
      setWandoos(data);
    } catch (error) {
      console.error('Error fetching wandoos:', error);
    }
  };

  const createWandoo = async () => {
    try {
      const response = await fetch('http://localhost:3000/wandoos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWandoo),
      });
      const data = await response.json();
      console.log('Created Wandoo:', data);
      fetchWandoos();
    } catch (error) {
      console.error('Error creating wandoo:', error);
    }
  };

  const deleteWandoo = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/wandoos/${id}`, { method: 'DELETE' });
      fetchWandoos();
    } catch (error) {
      console.error('Error deleting wandoo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wandoos List</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={newWandoo.title}
        onChangeText={(text) => setNewWandoo({ ...newWandoo, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newWandoo.description}
        onChangeText={(text) => setNewWandoo({ ...newWandoo, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={newWandoo.genreIcon}
        onChangeText={(text) => setNewWandoo({ ...newWandoo, genreIcon: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Date (YYYY-MM-DD)"
        value={newWandoo.eventDate}
        onChangeText={(text) => setNewWandoo({ ...newWandoo, eventDate: text })}
      />

      <Button title="Create Wandoo" onPress={createWandoo} />

      <FlatList
        data={wandoos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.wandooItem}>
            <Text style={styles.wandooTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Genre: {item.genreIcon}</Text>
            <Text>Event Date: {item.eventDate}</Text>
            <Button title="Delete" onPress={() => deleteWandoo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  wandooItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  wandooTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Wandoos;
