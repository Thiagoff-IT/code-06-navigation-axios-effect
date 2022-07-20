import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation, route}) => {

  return (
    <>
      <Text>{route.params.id}</Text>
    </>
  )
}

const styles = StyleSheet.create({});

export default DetailsScreen;
