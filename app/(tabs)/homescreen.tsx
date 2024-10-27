import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import NewsCard from "@/components/NewsCard";
import { fetchNews } from "@/scripts/api"; // Import the fetchNews function

const HomeScreen = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetchNews();
        setNewsData(response.articles);
      } catch (error) {
        setError("Error fetching news");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Ionicons name="happy-outline" size={32} style={styles.icon} />
          <View style={styles.textWrapper}>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.userName}>Victor 👋</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="What interests you today?"
        placeholderTextColor="#666"
        style={styles.searchBar}
      />

      {/* News Section */}
      <Text style={styles.sectionTitle}>Hot</Text>
      <View style={styles.newsOptions}>
        <Ionicons
          style={styles.newsIcon}
          name="add"
          size={32}
          color="#007BFF"
        />
        {[...Array(5)].map((_, index) => (
          <Ionicons
            key={index}
            name="notifications-outline"
            size={32}
            color="#333"
          />
        ))}
      </View>

      {/* News Card Labels */}
      <View style={styles.newsCardLabel}>
        <Text style={styles.newsLabel}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllTextLabel}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList for NewsCards */}
      <FlatList
        data={newsData}
        renderItem={({ item: { title, author, urlToImage, url, source } }) => (
          <NewsCard
            title={title}
            author={author}
            imageUrl={urlToImage}
            url={url}
            source={source.name}
          />
        )}
        keyExtractor={(item) => item.url}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E0E0E0",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userName: {
    fontSize: 16,
    color: "#555",
  },
  searchBar: {
    height: 40,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F5F5F7",
    borderRadius: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  newsOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  newsIcon: {
    marginRight: 10,
  },
  newsCardLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  newsLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAllTextLabel: {
    fontSize: 16,
    color: "#007BFF",
  },
  flatListContainer: {
    padding: 10,
  },
  errorText: {
    fontSize: 18,
    color: "#FF0000",
    textAlign: "center",
  },
});

export default HomeScreen;
