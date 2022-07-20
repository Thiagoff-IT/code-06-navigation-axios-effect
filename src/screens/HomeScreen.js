import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar'; 
import tmdb from '../api/tmdb';

const HomeScreen = () => {

  async function searchTmdb(query){
    const response = await tmdb.get('/search/movie',{
      params: {
        query,
        include_adult: false,
      }
    })

    console.log(response);
  }

  searchTmdb('how');

  return(
    <View>
      <SearchBar />
      <Text>Home Screen!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
