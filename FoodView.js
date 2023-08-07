import React, { Component } from 'react'
import { Text, View ,FlatList,TouchableOpacity,Button,Image,TextInput} from 'react-native'
import desert from './Desert';
import food from './food/food';


export class FoodView extends Component {
  render() {
    return (
      <View>
        <Image source =
{require('C:/Users/user/Desktop/myproject/logo90.png')}
style = {{ width: 50, height: 50 ,borderRadius:50,backgroundColor:'yellow',}}
/>
<TextInput
        style={{ margin: 15,
          height: 40,width: 280,borderColor: 'brown',borderWidth: 1,marginLeft: 58,marginTop: -45,borderRadius: 50,}}placeholder='🔍︎'
        placeholderTextColor='black'
        placeholderStyle={{ fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          fontStyle: 'italic',}}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        
      />


<FlatList
                keyExtractor={(item)=> item.id}
                data={food}
                renderItem={({item})=> (

<TouchableOpacity

onPress={()=> this.props.navigation.navigate('Details', {item: item} )  }
>
                  <View   >

                    
                    <View style={{padding:25, backgroundColor:'#FDF9D3',}}>
                    <Image style={{width:310,height:200, borderRadius:0,borderColor:'white',borderWidth:2,}} source={item.foodName}/>

                    <Text style={{color:'green',fontSize: 20,fontWeight:'bold',borderRadius:3,backgroundColor:'white',borderColor:'white',borderWidth:2,width:310}}>{item.namef}</Text>
                    <Text style={{color:'',fontSize: 15,fontWeight:'bold',borderColor:'white',borderWidth:2,}}>{item.price}</Text>

                    <Text  style={{padding:0, marginLeft:250, color:'brown',fontSize: 20,fontWeight:'bold',borderColor:'white',borderWidth:2,}}  > 🍝</Text>

                    <Button   onPress={()=>alert(`You have ordered ${item.namef} `)} title='Order Now 🛒' />

                    </View>
                  </View>
                  </TouchableOpacity>

                )}
vertical
      />
        <Text> jbjnkbj</Text>
      </View>
    )
  }
}

export default FoodView
