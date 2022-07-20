import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
  return(
    <View style={styles.container}>
      <Feather name="search" size={25} color="black" />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    margin: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  }
});

export default SearchBar;
