import React from "react"
import { View,Text, FlatList,StyleSheet } from "react-native"

import ColorBox from "../components/ColorBox"


const ColorPalette = ({route})=>{
    const {paletteName, colors}=route.params
    return (
        <View style={styles.container}>
            <FlatList
              data={colors}
              keyExtractor={(item)=>item.colorName}
              renderItem={({item})=>(<ColorBox 
                text={`${item.colorName} ${item.hexCode}`}
                bg={item.hexCode}
                />)}
                ListHeaderComponent={<Text style={styles.header}>{paletteName}</Text>}
                 
                  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      padding:12,
      backgroundColor:"#ffffff",
      flex:1
    },
    header:{
        fontSize:18,
        fontWeight:"700",
        marginBottom:30

    }
})

export default ColorPalette