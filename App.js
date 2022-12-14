import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./screens/Home"
import ColorPalette from "./screens/ColorPallete"
import AddNewPaletteModal from "./screens/AddNewPaletteModal"

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = ()=>{
  return (
      <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home}/>
      <MainStack.Screen name="ColorPalette" 
      component={ColorPalette}
     options={({route})=>({title:route.params.paletteName})}
      />
   </MainStack.Navigator>
  )
}



const App = ()=>(
   <NavigationContainer>
     <RootStack.Navigator>
       <RootStack.Screen
       name="Main"
       component={MainStackScreen}
       options={{headerShown:false}}
       />
       <RootStack.Screen 
       name="AddNewPalette"
       component={AddNewPaletteModal}
        screenOptions={{ presentation: 'modal' }}
       />
     </RootStack.Navigator>
  </NavigationContainer>
)

export default App