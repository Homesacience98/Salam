import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class List extends Component {

    state = {
        foods:  [
            {
                    id:0,
                    name: 'rice',

            },

            {

                id:1,
                name: 'beans',

            },
            {
                id: 2,
                name: 'amala',
            }


        ]


    }

    alertItemName = (item) => {
        alert(foods.name)

    }



  render() {
    return (
      <View>
        <Text> {foods.name} </Text>
      </View>
    )
  }
}

export default List
