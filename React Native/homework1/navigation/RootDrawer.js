import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CreateListScreen, UserSettingsScreen, OneTimeListScreen, RegularListScreen, AddToListScreen, EditScreen } from '../screens';
import { CustomDrawer } from '../commons/CustomDrawer';
import { CreateStack } from './CreateStack';
import { OneTimeStack } from './OneTimeStack';
import { MenuHeaderIcon } from '../components';

export const RootDrawer = () => {

    const { Navigator, Screen } = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Navigator
                // drawerStyle={{ width: 300 }}
                drawerContent={({navigation}) => (
                    <CustomDrawer navigation={navigation} />
                )} 
            >
                <Screen name="Add New List" component={CreateStack} />
                <Screen name="One Time List" component={OneTimeStack} />
                <Screen name="Regular List" component={RegularListScreen} />    
                <Screen name="User Settings" component={EditScreen} />
            </Navigator>
        </NavigationContainer>
    );
};

