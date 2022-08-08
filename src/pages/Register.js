import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default Register = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/dog3.png')}
          resizeMode="stretch"
          stale={styles.containerLogo}></Image>
      </View>

      <View style={styles.containerText}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Digite seu Email"
          keyboardType="email-address"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Lista')}>
          <Text style={styles.buttonText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  containerText: {
    flex: 1,
    backgroundColor: '#38a69d',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: '5%',
    marginTop: '5%',
    shadowColor: '#3e4452',
    shadowRadius: 10,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowOffset: {
      width: 4,
      height: 8,
    },
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '68%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
});
