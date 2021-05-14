import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//홈
import MainScreen from '~/screens/Home/Main';
import NoticeScreen from '~/screens/Home/Notice';
import GobackButton from '~/components/common/GobackButton';

//홈
const StackHome = createStackNavigator();
export default function HomeStackScreen() {
  return (
    <StackHome.Navigator
      initialRouteName="Main"
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
      <StackHome.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackHome.Screen
        name="Notice"
        component={NoticeScreen}
        options={{
          headerTitle: '알림',
          headerLeft: () => <GobackButton />,
          tabBarVisible: false,
        }}
      />
    </StackHome.Navigator>
  );
}
