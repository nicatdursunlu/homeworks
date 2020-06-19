import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

import { CustomDrawer } from '../commons';
import { ListStack } from './ListStack';
import { getUser } from '../redux/data';
import { CreateStack } from './CreateStack';
import { SettingsStack } from './SettingsStack';

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
                <Screen name="CreateStack" component={CreateStack} />
                <Screen name="SettingsStack" component={SettingsStack} />
            </Navigator>
        </NavigationContainer>
    );
});

