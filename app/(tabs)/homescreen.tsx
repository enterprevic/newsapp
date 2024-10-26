import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NewsCard from '@/components/NewsCard';
import { fetchNews } from '@/scripts/api'; // Import the fetchNews function

const HomeScreen = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    if (newsData.length === 0) {
      const getNews = async () => {
        try {
          const response = await fetchNews();
          console.log(response.articles); // Log response to ensure data is correct
          setNewsData(response.articles);
        } catch (error) {
          console.error('Error fetching news', error);
        }
      };

      getNews();
    }
  }, [newsData]);

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
        <Ionicons name="notifications-outline" size={24} />
      </View>

      {/* Search Bar */}
      <TextInput placeholder="What interests you today?" style={styles.searchBar} />

      {/* News Section */}
      <Text style={styles.sectionTitle}>Hot</Text>
      <View style={styles.newsOptions}>
        <Ionicons style={styles.newsIcon} name="add" size={32} />
        <Ionicons name="notifications-outline" size={32} />
        <Ionicons name="notifications-outline" size={32} />
        <Ionicons name="notifications-outline" size={32} />
        <Ionicons name="notifications-outline" size={32} />
        <Ionicons name="notifications-outline" size={32} />
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
        renderItem={({ item }) => (
          <NewsCard
            title={item.title}
            author={item.author}
            imageUrl={item.urlToImage}
            url={item.url}
            source={item.source.name}
          />
        )}
        keyExtractor={(item) => item.url}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  textWrapper: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '500',
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
    height: 45,
    borderColor: '#d2ddd3',
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  newsIcon: {
    backgroundColor: '#333',
    borderRadius: 50,
  },
  newsCardLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  newsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllTextLabel: {
    fontSize: 18,
    color: '#be3425',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
