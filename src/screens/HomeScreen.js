import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {  
    searchTmdb('Fight Club');
  },[]);

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
            <View>
              <Text>{item.original_title}</Text>
              <Text>{item.original_title}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
