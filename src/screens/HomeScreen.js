import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import SearchBar from '../components/SearchBar'; 

const HomeScreen = () => {
  return(
    <View>
      <Feather name="search" size={24} color="black" />
      <SearchBar />
      <Text>Home Screen!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
