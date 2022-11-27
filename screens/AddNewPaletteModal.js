import React,{useState, useCallback} from "react"

import {View,StyleSheet,FlatList,TouchableOpacity,Text,Alert} from "react-native"
import SwitchItem from "../components/SwitchItem"
import AppTextInput from "../components/TextInput"

import colors from "../colors/NewPaletteColor"

const AddNewPaletteModal= ({navigation})=>{
    const [input, setInput]=useState("")
    const [selectedColors, setSelectedColors] = useState([])

     const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors(current => [...current, color]);
      }else {
        setSelectedColors(current =>
          current.filter(c => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

    const handleSubmit=useCallback(()=>{
     if(!input){
        Alert.alert("Enter color palette name","you have to enter color name to continue",[{ text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"}])
     }else if (selectedColors.length < 3) {
      Alert.alert('Please choose at least 3 colors');
      }
     else{
       navigation.navigate("Home",{
        newPalette:{paletteName:input,colors:selectedColors}
       })
     }
    })
    return (
        <View style={styles.container}>
           <AppTextInput
            label="Name of your color palette"
            value={input}
            onChangeText={setInput}
            placeholder="Color palette name"
           />
           <FlatList
           style={styles.list}
            data={colors}
            keyExtractor={item=>item.colorName}
            renderItem={({item})=>(
                 <SwitchItem 
                  name={item.colorName}
                 value={
                !!selectedColors.find(
                  color => color.colorName === item.colorName,
                )
              }
              onValueChange={newValue => handleUpdate(item, newValue)}
                  />
            )}
            ItemSeparatorComponent={<View style={{height:2,backgroundColor:"#222222",marginBottom:10}}/>}
           />
         <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    paddingHorizontal:5,
    backgroundColor:"#ffffff",
    flex:1
   },
   btn:{
    backgroundColor:"teal",
    paddingVertical:16,
    paddingHorizontal:5,
    borderRadius:5
   },
   btnText:{
    textAlign:"center",
    fontWeight:"bold",
    color:"#ffffff",
    textTransform:"uppercase",
    fontSize:18
   }
 
})


export default AddNewPaletteModal