import {View, Text,TouchableOpacity, FlatList,StyleSheet} from "react-native"

const PalettePreview = ({handlePress,palette})=>{
    return <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>{palette.paletteName}</Text>
          <FlatList
          data={palette.colors.slice(0,5)}
          keyExtractor={item=>item.colorName}
          renderItem={({item})=>(<View style={[styles.box,{  backgroundColor:item.hexCode,}]}/>)}
          horizontal={true}
          />
    </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container:{
   marginBottom:20
    },
    text:{
        fontSize:18,
        fontWeigth:"bold",
        letterSpacing:0.5,
        marginBottom:8,
        color:"black"
    },
    box:{width:50,
        height:50,
        marginRight:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
        borderRadius:10
    }
})
export default PalettePreview