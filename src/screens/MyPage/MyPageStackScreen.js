import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageScreen from './Home';

//MY
const StackMypage = createStackNavigator();
export default function MypageStackScreen() {
  return (
    <StackMypage.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',,
        },
        headerTintColor: '#FF8500',
        headerTitleStyle: {
          fontFamily: 'NanumSquareRoundB',
        },
      }}>
      <StackMypage.Screen
        name="Home"
        component={MyPageScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackMypage.Navigator>
  );
}
