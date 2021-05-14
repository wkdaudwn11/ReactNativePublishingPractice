import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScrapScreen from './Home';

//스크랩
const StackScrap = createStackNavigator();
export default function ScrapStackScreen() {
  return (
    <StackScrap.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTintColor: '#FF8500',
        headerTitleStyle: {
          fontFamily: 'NanumSquareRoundB',
        },
      }}>
      <StackScrap.Screen
        name="Home"
        component={ScrapScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackScrap.Navigator>
  );
}
