// screens/Welcome.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', url: 'https://www.example.com/product1' },
  { id: '2', name: 'Product 2', url: 'https://www.example.com/product2' },
  { id: '3', name: 'Product 3', url: 'https://www.example.com/product3' },
  { id: '4', name: 'Product 4', url: 'https://www.example.com/product4' },
  { id: '5', name: 'Product 5', url: 'https://www.example.com/product5' },
];

const Welcome = ({ navigation }) => {

  // Function to handle product click
  const handleProductClick = (url) => {
    Linking.openURL(url); // Open the product URL in the browser
  };

  // Render each product item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductClick(item.url)} style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Store!</Text>

      {/* FlatList to display products */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* Back to Welcome button */}
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.button}>
        <Text style={styles.buttonText}>Back to Welcome</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  productItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007bff', // Blue color
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Welcome;
