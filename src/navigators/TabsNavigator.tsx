import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import Icons from '@expo/vector-icons/MaterialIcons'


export type TabsStackParams = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
}


const TabsStack = createBottomTabNavigator<TabsStackParams>()

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator screenOptions={{
            tabBarShowLabel: false
        }}>
            <TabsStack.Screen name='Home' component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='home' {...props} />
                }
            }} />
            <TabsStack.Screen name='Cart' component={() => <View></View>} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='shopping-cart' {...props} />
                }
            }} />
            <TabsStack.Screen name='Payment' component={() => <View></View>} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='account-balance-wallet' {...props} />
                }
            }} />
            <TabsStack.Screen name='Profile' component={() => <View></View>} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='person' {...props} />
                }
            }} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({})