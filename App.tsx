/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput
       placeholder='Masukan username anda'
       style={styles.inputName}
       value={email}
       onChangeText={setEmail}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
       placeholder="Masukan password anda"
       style={styles.inputPassword}
       value={password}
       onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
      <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputName: {
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
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
  },
});


export default SignInScreen;
