// Product.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: 'https://example.com/product-image.jpg' }} // Replace with your product image URL
        style={styles.image}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Product Name</Text>
      <Text style={styles.price}>$99.99</Text>
      <Text style={styles.size}>Size: M</Text>
      <Text style={styles.stock}>Stock: 25</Text>

      {/* Button to go back to Home */}
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Welcome.js')} // Navigates to 'Home' screen
      />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 5,
  },
  size: {
    fontSize: 16,
    marginVertical: 5,
  },
  stock: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Product;
