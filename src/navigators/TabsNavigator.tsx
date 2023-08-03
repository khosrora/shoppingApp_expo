import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';


export type TabsStackParams = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
}


const TabsStack = createBottomTabNavigator<TabsStackParams>()

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator>
            <TabsStack.Screen name='Home' component={HomeScreen} />
            <TabsStack.Screen name='Cart' component={() => <View></View>} />
            <TabsStack.Screen name='Payment' component={() => <View></View>} />
            <TabsStack.Screen name='Profile' component={() => <View></View>} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({})