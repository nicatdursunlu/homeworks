import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserSettingsScreen } from '../screens';

const { Navigator,Screen } = createStackNavigator();

export const SettingsStack = () => {
  return(
    <Navigator>
      <Screen 
        name="Settings"
        component={UserSettingsScreen}
        options={{ title: "UserSettings" }}
      />
    </Navigator>
  );
};