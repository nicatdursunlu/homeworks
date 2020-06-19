import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UserSettingsScreen } from '../screens';
import { headerDefaultStyles } from '../styles/headerDefaultStyles';

const { Navigator,Screen } = createStackNavigator();

export const SettingsStack = () => {
  return(
    <Navigator screenOptions={headerDefaultStyles}>
      <Screen 
        name="Settings"
        component={UserSettingsScreen}
        options={{ title: "UserSettings" }}
      />
    </Navigator>
  );
};