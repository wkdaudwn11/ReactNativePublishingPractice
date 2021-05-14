import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AttendanceScreen from '~/screens/Attendance/Home';

//출근확인
const StackAttendance = createStackNavigator();
export default function AttendanceStackScreen() {
  return (
    <StackAttendance.Navigator
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
      <StackAttendance.Screen
        name="Home"
        component={AttendanceScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackAttendance.Navigator>
  );
}
