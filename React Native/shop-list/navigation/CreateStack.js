import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateListScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => {
  return(
    <Navigator>
      <Screen 
        name="Create" 
        component={CreateListScreen} 
        options={{ title: "New List" }} 
      />
    </Navigator>
  );
};