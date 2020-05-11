import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
    return(
        <Navigator>
            <Screen name="Home" component={HomepageScreen} />
        </Navigator>
    );
};