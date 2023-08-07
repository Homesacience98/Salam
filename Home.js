import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inputs from './Inputs.js'
import Imagep from './Imagep.js'

// export default class App extends React.Component {


//  render() {
//  return (
  export default ({ navigation }) => {


 <View style={styles.container}>

 {/* <Imagep/> */}
 
 <View  style={styles.header}/><Text></Text>

<Inputs/>


<Text> you dont have an account ?</Text>




 </View>

//  );
 }
// }
const styles = StyleSheet.create({
 container:{
 flex: 1,
 color:'white',
 backgroundColor: 'yellow',
 alignItems: 'center',
 justifyContent: 'center',
 width: 400,
//  marginTop: 100,
 },
 header:{
  width: 800,
  height: 100,
  backgroundColor: 'white',
  marginTop: -400,
  marginLeft:190,

 }




});

