import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

import { UserSettingsScreen } from '../screens';
import { CustomDrawer } from '../commons';
import { ListStack } from './ListStack';
import { getUser } from '../redux/data';

const mapStateToProps = (state) => ({
    user: getUser(state),
});

export const RootDrawer = connect(mapStateToProps)((props) => {

    const { Navigator, Screen } = createDrawerNavigator();
    
    const { username, imgUrl } = props.user

    const width = Dimensions.get("screen").width * 0.80;

    return(
        <NavigationContainer>
            <Navigator
                drawerStyle={{ width: width }}
                drawerContent={({ navigation }) => (
                    <CustomDrawer 
                        username={username} 
                        imgUrl={imgUrl} 
                        navigation={navigation} 
                    />
                )} 
            >
                <Screen name="ListStack" component={ListStack} />
                <Screen name="UserSettings" component={UserSettingsScreen} />
            </Navigator>
        </NavigationContainer>
    );
});

