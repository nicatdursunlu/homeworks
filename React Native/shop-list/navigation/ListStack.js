import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    AddProductToListScreen, 
    RegularListScreen, 
    OneTimeListScreen, 
    CreateListScreen, 
    SingleListScreen 
} from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const ListStack = () => {
    return(
        <Navigator headerMode="none" >
            <Screen name="Create List" component={CreateListScreen} />
            <Screen name="Regular List" component={RegularListScreen} />
            <Screen name="One Time List" component={OneTimeListScreen} />
            <Screen name="SingleListScreen" component={SingleListScreen} />
            <Screen name="AddProductToListScreen" component={AddProductToListScreen}/>      
        </Navigator>
    );
};