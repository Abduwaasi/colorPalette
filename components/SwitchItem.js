import React,{useState} from 'react'
import { StyleSheet, Text, View,Switch } from 'react-native'

const SwitchItem = ({name,value,onValueChange}) => {

  return (
         <View style={styles.wrapper}>
              <Text style={styles.text}>{name}</Text>
              <Switch
              value={value}
              onValueChange={onValueChange}
              />
           </View>
  )
}

export default SwitchItem

const styles = StyleSheet.create({
wrapper:{
    flexDirection:"row", 
    alignItems:"center",
    justifyContent:"space-between",
   
  
},
text:{
    color:"#222222",
    fontWeight:"bold",
    fontSize:18,

}
})