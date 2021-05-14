import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ManagementScreen from '~/screens/Management/Home';

//지원관리
const StackManagement = createStackNavigator();
export default function ManagementStackScreen() {
  return (
    <StackManagement.Navigator
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
      <StackManagement.Screen
        name="Home"
        component={ManagementScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackManagement.Navigator>
  );
}
