import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default Card = ({url}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        resizeMode="stretch"
        source={{
          uri: url,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    maxWidth: 130,
    flexDirection: 'row',
    margin: 10,
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});
