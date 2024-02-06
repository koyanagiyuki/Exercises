/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import Programmer from './assets/padi_logo.jpg';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PADI Company</Text>
      <ScrollView>
        <Image
          source={require('./assets/padi_logo.jpg')}
          style={styles.image}
        />
    <Text style={styles.text}>
      Professional Association of Diving Instructors.
    </Text>
    <TextInput
      placeholder='Your Name'
      style={styles.inputName}
    />
    <TextInput
      placeholder='Email'
      style={styles.inputEmail}
    />
    <TextInput
      placeholder="Password"
      style={styles.inputPassword}
    />
    <Button title= 'click here'> Click Here </Button>  
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  inputName: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10, 
  },
  inputEmail: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10, 
  },
  inputPassword: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10, 
  },
});


export default App;
