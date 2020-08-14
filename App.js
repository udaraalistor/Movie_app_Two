import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import {
  StyleSheet,
  View,
  Text
 
} from 'react-native';

import Home from './screen/Home';
import Profile from './screen/Profile';
import Recent from './screen/Recent';


const App= () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Recent" component={Recent} />
    </Tab.Navigator>

    </NavigationContainer>
  
  );
};

const styles = StyleSheet.create({
 
});

export default App;
