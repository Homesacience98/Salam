import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,Button   } from 'react-native'

export default function DetailScreen( { route}){
    const{item} = route.params;
    return (
      
      <View style={{padding:23,backgroundColor:'#FDF9D3',}}>
        <Image source =
{require('C:/Users/user/Desktop/myproject/logo90.png')}
style = {{ width: 50, height: 50 ,borderRadius:50,backgroundColor:'yellow',}}
/>
<Text style={{fontWeight:'bold',fontSize:20 ,color:'white', marginTop: 30,marginLeft: -10,backgroundColor:'brown', width: 330,padding:15, }}>   {item.namef}</Text>

        <Image  style={{width: 330, borderRadius: 0, borderColor: 'white', borderWidth: 1, height: 200,marginTop: 0,marginLeft: -10,}} source={item.foodName}/>

        <Text style={{fontWeight:'bold', color:'green', marginTop: 0,marginLeft: 0,}}>   {item.namef}</Text>
        <Text style={{fontWeight:'bold',color:'brown', marginTop: 0,marginLeft: 0,}}>   {item.price}</Text>


        <Button   onPress={()=>alert(`You have ordered ${item.namef} `)} title='Add to cart 🛒' />

      </View>
    );
  }

  const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:'yellow',
            justifyContent: 'center',
            alignItems: 'center',
        }





  });