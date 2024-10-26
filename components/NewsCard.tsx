import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewsCard = ({ title, author, imageUrl, url,source, navigation }) => {
  const handlePress = () => {
    navigation.navigate('NewsDetail', { url });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.author}>{source}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180, // Fixed width for the card
    height: 220, // Fixed height for the card
    margin: 5,
    padding: 5,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%', // Full width of the card
    height: 120, // Set a height that suits your design
    borderRadius: 5,
  },
  title: {
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  author: {
    fontSize: 12, // Adjust font size as needed
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
});

export default NewsCard;
