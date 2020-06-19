import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CreateListScreen } from '../screens';
import { headerDefaultStyles } from '../styles/headerDefaultStyles';

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => {
  return(
    <Navigator screenOptions={headerDefaultStyles}>
      <Screen 
        name="Create List" 
        component={CreateListScreen} 
        options={{ title: "New List" }} 
      />
    </Navigator>
  );
};