import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

// Tab
import HomeStackScreen from '~/screens/Home'; //홈
import LoginStackScreen from '~/screens/Login'; // 로그인
import ScrapStackScreen from '~/screens/Scrap'; // 스크랩
import ManagementStackScreen from '~/screens/Management'; //지원관리
import AttendanceStackScreen from '~/screens/Attendance'; //출근확인
import MyPageStackScreen from '~/screens/MyPage'; //MY

//하단탭 필요없는 페이지 처리
const isTabBarVisible = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params
    ? route.params.screen
    : 'HomeStackScreen';
  return !['Notice'].includes(routeName);
};

// 하단탭
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: isTabBarVisible(route),
      })}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#FF8500',
        style: {
          borderTopColor: 'white',
          backgroundColor: 'white',
          height: normalize(160),
          elevation: 0,
        },
        labelStyle: {
          fontFamily: 'NanumSquareRoundR',
          fontSize: normalize(24),
          marginTop: normalize(0),
        },
        tabStyle: {
          paddingVertical: normalize(33),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({focused}) => (
            <Icon
              source={
                focused
                  ? require('~/assets/images/ico/ico_bottom_home_on.png')
                  : require('~/assets/images/ico/ico_bottom_home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scrap"
        component={ScrapStackScreen}
        options={{
          tabBarLabel: '스크랩',
          tabBarIcon: ({focused}) => (
            <Icon
              source={
                focused
                  ? require('~/assets/images/ico/ico_bottom_more_on.png')
                  : require('~/assets/images/ico/ico_bottom_more.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Management"
        component={ManagementStackScreen}
        options={{
          tabBarLabel: '지원관리',
          tabBarIcon: ({focused}) => (
            <Icon
              source={
                focused
                  ? require('~/assets/images/ico/ico_bottom_calendar_on.png')
                  : require('~/assets/images/ico/ico_bottom_calendar.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttendanceStackScreen}
        options={{
          tabBarLabel: '출근확인',
          tabBarIcon: ({focused}) => (
            <Icon
              source={
                focused
                  ? require('~/assets/images/ico/ico_bottom_alarm_on.png')
                  : require('~/assets/images/ico/ico_bottom_alarm.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStackScreen}
        options={{
          tabBarLabel: 'MY',
          tabBarIcon: ({focused}) => (
            <Icon
              source={
                focused
                  ? require('~/assets/images/ico/ico_bottom_person_on.png')
                  : require('~/assets/images/ico/ico_bottom_person.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Login"
          component={LoginStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const Icon = styled.Image`
  width: ${normalize(30)};
  height: ${normalize(30)};
`;

export default App;
