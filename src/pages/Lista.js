import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import api from '../services/Api';
import Card from '../components/Card';

export default Lista = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    api.get('/list?Options=Husky').then(res => {
      setDogs(res.data);
    });
  }, []);

  const getAllDogs = () => {
    console.log(dogs);
    const res = dogs.list.map(uri => {
      console.log(uri);
      return <Card url={uri} />;
    });
    return res;
  };
  return (
    <View style={styles.container}>{dogs.length > 0 && getAllDogs()}</View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },

  imagem: {
    width: 200,
    height: 200,
  },
});
