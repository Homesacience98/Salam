import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert,ImageBackground } from 'react-native';
import Imagep from './Imagep.js';

export default ({ navigation }) => {

  const handleLogin = () => {

    Alert.alert('Welcome', 'You are logged in now', [
      {
        text: 'Cancel',
        onPress: () =>navigation.navigate('Login'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Explore')},
    ]);
    //  login logic here
    navigation.navigate('Explore');
  };

  return (

    <ImageBackground
      source={require('./img/backfood.jpg')}
      style={styles.backgroundImage}
      >
    <View style={styles.container}>
      <Imagep />

      <TextInput
        style={styles.input}
        placeholder='Email :'
        placeholderTextColor='white'
        placeholderStyle={{ fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          fontStyle: 'italic',}}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder='Password :'
        placeholderTextColor='white'
        autoCapitalize='none'
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>


      <Text style ={{color: 'white', fontWeight: 'bold',}}>{"\n"}You dont have an account?  <Text   onPress={()=> navigation.navigate('Signup')}  style={{color: 'red',}}>Register</Text>   {"\n"}{"\n"} {"\n"}</Text>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    color:'white',
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
   marginTop: -250,
  },
  input: {
    margin: 15,
    height: 40,
    width: 350,
    borderColor: 'yellow',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'yellow',
    
    padding: 10,
    margin: 30,
    height: 40,
    width: 350,
  },
  submitButtonText: {
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    // width: 300,
    // height: 100,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center', // or 'flex-start', 'flex-end'
    alignItems: 'center', // or 'flex-start', 'flex-end'
  },
});
