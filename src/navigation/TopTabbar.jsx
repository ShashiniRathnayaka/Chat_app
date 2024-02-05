import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import ChatListScreen from '../screens/ChatListScreens';
import StatusListScreen from '../screens/StatusListScreen';
import CallListScreen from '../screens/CallListScreen';
import { Colors } from '../theme/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';


const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const TopTabbar = () => {
    return (
        <NavigationContainer>
            
            <Drawer.Navigator initialRouteName='HomeScreen'>
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="ChatListScreen" component={ChatListScreen} />
            </Drawer.Navigator>

        {/* <Tab.Navigator 
            screenOptions={() => ({
                tabBarActiveTintColor: Colors.secondaryColor,
                tabBarInactiveTintColor: Colors.tertiary,
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor,
                }
        })}>
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Chats" component={ChatListScreen} />
            <Tab.Screen name="Status" component={StatusListScreen} />
            <Tab.Screen name="Calls" component={CallListScreen} />
        </Tab.Navigator> */}

        </NavigationContainer>
    )
}

export default TopTabbar