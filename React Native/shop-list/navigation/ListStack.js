import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    AddProductToListScreen, 
    RegularListScreen, 
    OneTimeListScreen, 
    CreateListScreen, 
    SingleListScreen 
} from '../screens';
import { headerDefaultStyles } from '../styles/headerDefaultStyles';
import { HeaderIcon } from '../components';

const { Navigator, Screen } = createStackNavigator();

export const ListStack = () => {
    return(
        <Navigator screenOptions={headerDefaultStyles}>
            <Screen 
                name="One Time List" 
                component={OneTimeListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderIcon 
                            side="right" 
                            iconName="menu"
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Screen 
                name="Regular List" 
                component={RegularListScreen} 
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderIcon 
                            side="right" 
                            iconName="menu"
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerLeft: () => (
                        <HeaderIcon />
                    )
                })}
            />
            <Screen name="SingleListScreen" component={SingleListScreen} />
            <Screen name="AddProductToListScreen" component={AddProductToListScreen}/>      
        </Navigator>
    );
};