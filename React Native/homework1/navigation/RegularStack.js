import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RegularListScreen, CreateListScreen, AddToListScreen } from '../screens';
import { ShopListCard } from '../components';


const { Navigator, Screen } = createStackNavigator();

export const RegularStack = () => {
    return(
        <Navigator headerMode="none">
            <Screen 
                name="One Time List" 
                component={RegularListScreen} 
                options={{
                    title: "nvsjnvnv",
                    headerLeft: () => <MenuHeaderIcon/>
                }}
            />
            <Screen 
                name="Create List"
                component={CreateListScreen}
            />

            <Screen 
                name="ShopListCard"
                component={ShopListCard}
            />
            <Screen 
                name="Add"
                component={AddToListScreen}
            />
            
        </Navigator>
    );
};