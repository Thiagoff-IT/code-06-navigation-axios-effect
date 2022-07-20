import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  async function searchTmdb(query) {
    try {
      const response = await tmdb.get('/search/movie', {
        params: {
          query,
          include_adult: false,
        }
      })
      setResults(response.data.results);
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <View>
      <SearchBar 
        onChangeText={(t) => setText(t)}
        onEndEditing={(t) => searchTmdb(t)}
        value={text}
      />
      <FlatList 
        data={results}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => {
          return(
            <Text>{item.original_title}</Text>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
