import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    RegularListScreen, 
    CreateListScreen, 
    AddToListScreen, 
    SingleStaticEditScreen 
} from '../screens';

import { ShopListCard } from '../components';
import { Header } from '../commons';


const { Navigator, Screen } = createStackNavigator();

export const RegularStack = () => {
    return(
        <Navigator headerMode="none">
            <Screen 
                name="One Time List" 
                component={RegularListScreen} 
                // options={{
                //     title: "One Time List",
                //     headerLeft: () => <Header title="Regular Lists" />
                // }}
            />

            <Screen name="Create List" component={CreateListScreen}/>
            <Screen name="Add To List" component={AddToListScreen}/>
            <Screen name="SingleStaticEditScreen" component={SingleStaticEditScreen} />
            
        </Navigator>
    );
};