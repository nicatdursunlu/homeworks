import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    AddProductToListScreen, 
    RegularListScreen, 
    OneTimeListScreen,  
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
            <Screen 
                name="SingleListScreen" 
                component={SingleListScreen} 
                options={{
                    headerTransparent: true,
                    headerTitle: false,
                    headerLeft: () => <HeaderIcon />
                }} 
            />
            <Screen 
                name="AddProductToListScreen" 
                component={AddProductToListScreen}
                options={({ navigation, route }) => ({
                    title: route.params.singleList.title,
                    headerRight: () => (
                        <HeaderIcon 
                            side="right" 
                            iconName="save"
                            onPress={() => navigation.goBack()}
                        />
                    ),
                    headerLeft: () => (
                        <HeaderIcon
                            side="left" 
                            iconName="arrowBack"
                            onPress={() => {
                                navigation.navigate(
                                    route.params.singleList.type === "Regular" 
                                        ? "Regular List"
                                        : "One Time List"
                                )
                            }}
                        />
                    )
                })}
            />      
        </Navigator>
    );
};