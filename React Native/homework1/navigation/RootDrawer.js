import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserSettingsScreen } from '../screens';
import { CustomDrawer } from '../commons/CustomDrawer';
import { ListStack } from './ListStack';
import { getUser } from '../redux/data';

import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    user: getUser(state),
});

export const RootDrawer = connect(mapStateToProps)((props) => {

    const { Navigator, Screen } = createDrawerNavigator();
    
    const { username, imgUrl } = props.user
    //console.log("props:  ", props);
    //console.log("propsUser:  ", props.user);

    return(
        <NavigationContainer>
            <Navigator
                drawerStyle={{ width: 310 }}
                drawerContent={({ navigation }) => (
                    <CustomDrawer username={username} imgUrl={imgUrl} navigation={navigation} />
                )} 
            >
                <Screen name="ListStack" component={ListStack} />
                <Screen name="UserSettings" component={UserSettingsScreen} />
            </Navigator>
        </NavigationContainer>
    );
});

