import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native'
import TabsNavigator, { TabsStackParams } from './TabsNavigator';

//! screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStackParamsList = {
    TabsStack : NavigatorScreenParams<TabsStackParams>
    HomeScreen: undefined;
    DetailsScreen: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='HomeScreen' component={TabsNavigator} />
            <RootStack.Screen name='DetailsScreen' component={DetailsScreen} />
        </RootStack.Navigator>
    )
}

export default RootNavigator