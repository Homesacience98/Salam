import React, { Component } from 'react'
import {AppRegistry, Text, View ,StyleSheet} from 'react-native'
import Imagep from './Imagep.js'
import Explore from './Explore.js'
// import { NativeRouter,Switch,Route,Routes, } from 'react-router-native'
import FoodList from './FoodList.js'
import Home from './Home.js'
import Inputs from './Inputs.js'
import Register from './Register.js'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './DetailScreen.js'
import DesertList from './DesertList.js'
import { FoodView } from './FoodView.js'

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTintColor:'white', headerStyle: {backgroundColor:'green',height: 80,} }}>

          <Stack.Screen options={{ headerRight: () => (
              <Icon
                name=""
                size={30}
                color="white"
                style={{ marginLeft: 10 }}
              />
            ), headerTintColor:'yellow', headerStyle:{backgroundColor: "black",} }} name="Welcome " component={Explore} />
          <Stack.Screen  name="Explore"  component={FoodList} />
          <Stack.Screen  options={{ headerStyle:{backgroundColor: "black",} }} name="Login" component={Inputs} />
          <Stack.Screen  options={{ headerStyle:{backgroundColor: "black",} }} name="Signup" component={Register} />
          <Stack.Screen  options={{ headerStyle:{backgroundColor: "green",} }} name="Details" component={DetailScreen} />
          <Stack.Screen  options={{ headerStyle:{backgroundColor: "green",} }} name="Drinks" component={DesertList} />
          <Stack.Screen  options={{ headerStyle:{backgroundColor: "green",} }} name="Food" component={FoodView} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
// }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"yellow",
    alignItems: "center",
    justifyContent: "center",



  },
});
