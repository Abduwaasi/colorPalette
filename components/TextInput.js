import React from "react"
import {View,Text,TextInput,StyleSheet} from "react-native"


const AppTextInput = ({label, ...props})=>{
    return <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...props} style={styles.input}/>
    </View>
}



const styles = StyleSheet.create({

    container:{
        marginBottom:20
    },
    label:{
        fontSize:18,
        fontWeight:"600",
        color:"#000000",
        marginBottom:8
    },
    input:{
        borderColor:"#222222",
        borderWidth:1,
        borderRadius:8,
        padding:10
    }
})


export default AppTextInput
