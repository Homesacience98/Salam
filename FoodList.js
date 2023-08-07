import React, { Component } from 'react'
import { Text, View,Button ,StyleSheet, FlatList,Image, Touchable, TouchableOpacity,TextInput} from 'react-native'
import food from './food/food';
import Desert from './Desert';
import Imagep from './Imagep';
import desert from './Desert';
import Icon from 'react-native-vector-icons/FontAwesome';


export default( {  navigation } ) => (
 
      <View style={styles.foodCatContainer} >

      </View>,
      <View>
<Image source =
{require('C:/Users/user/Desktop/myproject/logo90.png')}
style = {{ width: 50, height: 50 ,borderRadius:50,backgroundColor:'yellow',}}
/>

<TextInput
        style={styles.input}
        placeholder='🔍︎'
        placeholderTextColor='black'
        placeholderStyle={{ fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          fontStyle: 'italic',}}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        
      />



<Image source =
{require('C:/Users/user/Desktop/myproject/food/assets/bad3.jpg')}
style = {{ width: 360, height: 80 ,backgroundColor:'yellow',}}
/>
<TouchableOpacity  onPress={()=> navigation.navigate('Food')}>

          <View> 
            <Text  style={{fontSize: 20, fontWeight:'bold',}} > Food Available 🍜</Text>
{/* <Icon   style={{ marginLeft: 140,marginTop: -25, }} name="bars" size={30} color="black" /> */}
            
            </View>
</TouchableOpacity>

<View>
          <FlatList style={{backgroundColor:'black', marginTop:10,  height:170,}}
          keyExtractor={(item)=> item.id}
          data={food}
          renderItem={({item})=> 
          
         <View style={styles.flatImage}>    
<TouchableOpacity onPress={()=> navigation.navigate('Details', {item: item} )  }
>
                 <Image style={{width:80, height:80, borderWidth: 2, borderColor: 'white',borderRadius:90 , marginTop: -100,}} source={item.foodName}/>

                  <Text style={styles.textpp}>  {item.namef}  </Text>
                  <Text style={styles.textp}>  {item.price} </Text>
                  </TouchableOpacity>
          </View>
          }
          horizontal
          
          />
</View>
<TouchableOpacity  onPress={()=> navigation.navigate('Drinks')}>
          <View> 
            <Text  style={{fontSize: 20, fontWeight:'bold',}} > Desert🍹/ Drinks🥤 </Text>
            {/* <Icon style={{ marginLeft: 140,marginTop: -25, }} name="coffee" size={30} color="black" /> */}
            </View>

            </TouchableOpacity>
          <View>
          <FlatList
                keyExtractor={(item)=> item.id}
                data={desert}
                renderItem={({item})=> (

<TouchableOpacity

onPress={()=> navigation.navigate('Details', {item: item} )  }

>
                  <View   style={styles.secondflatList}>

                    <View>

                    <Text  style={{fontWeight:'bold',}}>{item.namef}</Text>
                    <Text>{item.price}</Text>
                    <Button   onPress={()=>alert(`You have ordered ${item.namef} `)} title='Order Now' />


                    </View>

<Image  style={styles.secondflatImage} source={item.foodName}/>


                  </View>

                  </TouchableOpacity>

                )}
vertical

      />
                    
          </View>


<View>

  <Text>gufvfvif6fituftycfitycitycityctycyucku </Text>
</View>

      </View>

  
);

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    backgroundColor:"yellow",  
    alignItems: "center",
    justifyContent: "center",
    
  },
  myFood:{
fontSize:20,
fontWeight:"bold",
color:'white',

  },
myCategory:{
  fontSize:16,
  fontWeight:"bold",
  color:'white',


},
foodCatContainer:{
  paddingHorizontal: 20,
  marginTop:230,

},
flatImage:{
width: 'fit',
height: 80,
width: 'auto',
borderRadius:50,
justifyContent: "center",
marginTop:100,
// backgroundColor: 'yellow',
marginHorizontal:5, 
// padding:5,
},
textp:{
  color: 'white',
  // fontWeight: 'bold',
  marginLeft: 6,

},
textpp:{
  color: 'yellow',
  fontWeight: 'bold',
  marginLeft: 2,

},
secondflatImage:{
width: 70,
height: 70,
borderRadius: 50,
borderWidth: 1,
borderColor: 'black',

},
secondflatList:{
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  backgroundColor: 'white',
  marginHorizontal: 10,
  marginVertical: 10,
  elevation: 17,
  borderWidth: 3,
  borderColor: 'yellow',
  // paddingVertical: 15,
},
input: {
  margin: 15,
  height: 40,
  width: 280,
  borderColor: 'brown',
  borderWidth: 1,
  marginLeft: 58,
  marginTop: -45,
  borderRadius: 50,
}, 


}); 