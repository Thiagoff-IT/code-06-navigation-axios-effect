import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';

const HomeScreen = ({navigation}) => {
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
    <>
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
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", {
                  id: item.id
                })}
              >
                <Text>{item.original_title}</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
