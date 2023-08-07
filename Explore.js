import React from 'react';
import {View,Text,Button,StyleSheet,Pressable,ImageBackground} from 'react-native';
import Imagep from './Imagep.js'
import FoodList from './FoodList.js';


export default ({ navigation}) => (
    
    <View >
    <ImageBackground
      source={require('./img/backfood.jpg')}
      style={styles.backgroundImage}
      >
<Imagep />

<Text style ={{color: 'white', fontWeight: 'bold',}}>{"\n"}  Yummy! Food Delivery with ease {"\n"}{"\n"} {"\n"}</Text>

    <Pressable style={styles.button} onPress={()=> navigation.navigate('Login')} >
      <Text style={styles.text}>Login </Text>
    </Pressable>

    <Pressable style={styles.button2} onPress={()=> navigation.navigate('Signup')} >
      <Text style={styles.text}>Register</Text>
    </Pressable>

      </ImageBackground>

        </View>
        );
        const styles = StyleSheet.create({
            container:{
              flex: 1,
              backgroundColor:"yellow",  
              alignItems: "center",
              justifyContent: "center",
            },
            button: {
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: 'yellow',
                marginLeft: -150,
                marginTop: 0,
              },
              text: {
                fontSize: 16,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'black',
              },
              button2:{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: 'yellow',
                marginLeft: 200,
                marginTop: -45,
              },
              backgroundImage: {
                resizeMode: 'cover', // or 'stretch' or 'contain'
                justifyContent: 'center', // or 'flex-start', 'flex-end'
                alignItems: 'center', // or 'flex-start', 'flex-end'
                height: 900,
                width: 370,
                marginTop: -170,
              },
            

        });