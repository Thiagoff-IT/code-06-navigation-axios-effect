import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import tmdb from '../api/tmdb';

const DetailsScreen = ({ navigation, route }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(route.params.id);
  }, []);
  
  async function getMovie(id) {
    try {
      const response = await tmdb.get(`/movie/${id}`, {
        params: {
        }
      })
      setMovie(response.data);
    }
    catch (err) {
      console.log(err);
    }

  }
  return (
    <>
      <Text>{movie.original_title}</Text>
    </>
  )
}

const styles = StyleSheet.create({});

export default DetailsScreen;
