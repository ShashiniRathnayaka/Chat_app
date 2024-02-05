import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { Colors } from './src/theme/Colors'
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer';

const App = () => {
    return (
        // <NavigationContainer>
        <View>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <HomeScreen/> 
        </View>
        // {/* </NavigationContainer>     */}
    )
}

export default App