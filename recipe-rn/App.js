// App.tsx or App.js
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
const Stack = createNativeStackNavigator()

function Home({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>Recipe AI</Text>
      <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
    </View>
  )
}

function CameraScreen() { /* hook up expo-image-picker here */ return <View/> }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Camera" component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
