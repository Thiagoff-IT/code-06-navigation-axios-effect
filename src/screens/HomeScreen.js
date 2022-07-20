import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

const HomeScreen = () => {
  const [text, setText] = useState('');

  async function searchTmdb(query) {
    try {
      const response = await tmdb.get('/search/movie', {
        params: {
          query,
          include_adult: false,
        }
      })
      console.log(response);
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
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
