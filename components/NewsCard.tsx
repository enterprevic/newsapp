import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const NewsCard = ({ title, author, imageUrl, url, source, navigation }) => {
  const handlePress = () => {
    navigation.navigate("NewsDetail", { url });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
        onError={(e) => console.log("Error loading image: ", e)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.source}>{source}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%", // Use percentage for responsiveness
    maxWidth: 400, // Set a maximum width for larger screens
    height: "auto", // Allow height to adjust based on content
    margin: 10, // Margin for spacing
    padding: 5,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%", // Make image take full width of the card
    height: 200, // Set a fixed height for the image
    borderRadius: 5,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
    textAlign: "center",
  },
  source: {
    fontSize: 10,
    color: "#999",
    marginTop: 2,
    textAlign: "center",
  },
});

export default NewsCard;
