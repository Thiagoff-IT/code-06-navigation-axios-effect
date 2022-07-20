import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const HomeScreen = () => {
  return(
    <View>
      <Feather name="search" size={24} color="black" />
      <Text>Home Screen!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;
