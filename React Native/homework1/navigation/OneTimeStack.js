import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OneTimeListScreen } from '../screens';


const { Navigator, Screen } = createStackNavigator();

export const OneTimeStack = () => {
    return(
        <Navigator headerMode="none">
            <Screen 
                name="One Time List" 
                component={OneTimeListScreen} 
                options={{
                    title: "nvsjnvnv",
                    headerLeft: () => <MenuHeaderIcon/>
                }}
            />
        </Navigator>
    );
};