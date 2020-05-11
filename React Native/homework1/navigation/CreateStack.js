import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CreateListScreen } from '../screens/CreateListScreen';
import { MenuHeaderIcon } from '../components';

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => {
    return(
        <Navigator headerMode="none">
            <Screen 
                name="Create List" 
                component={CreateListScreen} 
            />
        </Navigator>
    );
};