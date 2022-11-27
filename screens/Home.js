import React,{useState,useCallback,useEffect} from "react"
import { View,FlatList,StyleSheet,RefreshControl,TouchableOpacity,Text} from "react-native"
import PalettePreview from "../components/PalettePreview";

// Colors
// import COLOR_PALETTES from "../colors/colors"

const Home = ({navigation,route})=>{
  const [colorPalette, setColorPalette] = useState({})
  const [isRefreshing, setIsRefreshing] = useState(false)
  const newPalette = route.params?route.params.newPalette:null
  const url ="https://color-palette-api.kadikraman.now.sh/palettes"
  const fetchColorPalette = useCallback(
    async()=>{
  try {
      const res = await fetch(url)
      if(res.ok){
        const data = await res.json()
        setColorPalette(data)
      }

  } catch (error) {
    console.log(error)
  }
  }
  ) 

  useEffect(()=>{
    fetchColorPalette()
  },[])

  const handleRefresh = useCallback(async()=>{
    setIsRefreshing(true)
    await fetchColorPalette()
      setIsRefreshing(false)
  })
  useEffect(()=>{
    if(newPalette){
      setColorPalette(current=>[newPalette,...current])
    }
  },[newPalette])
  const {navigate} = navigation
  return (<View style={styles.container}>
    <TouchableOpacity onPress={()=>navigate("AddNewPalette")}>
      <Text style={styles.addModal}>Add New Color Palette</Text>
    </TouchableOpacity>
     <FlatList
     data={colorPalette}
     keyExtractor={item=>item.paletteName}
     renderItem={({item})=>(
    <PalettePreview
      handlePress={()=>{
        navigate("ColorPalette",item)}
      }
      palette={item}
     />
     
     )}
     refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}
     />
 
  </View>
  )
}
const styles = StyleSheet.create({
 container:{
  padding:16,
  backgroundColor:"#ffffff",
  flex:1
 },
 addModal:{
  fontSize:20,
  color:"green",
  fontWeight:"bold",
  marginBottom:30
 }
})
export default Home