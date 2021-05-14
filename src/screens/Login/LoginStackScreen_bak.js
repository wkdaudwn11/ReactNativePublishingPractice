import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//로그인
import LoginSelectScreen from '~/screens/Login/LoginSelect';
import LoginScreen from '~/screens/Login/Login';
import JoinSelectScreen from '~/screens/Login/JoinSelect';
import JoinStep1Screen from '~/screens/Login/JoinStep1';
import JoinStep2Screen from '~/screens/Login/JoinStep2';
import JoinAddInfoScreen from '~/screens/Login/JoinAddInfo';
import FindAccountScreen from '~/screens/Login/FindAccount';
import FindAccountConfirmScreen from '~/screens/Login/FindAccountConfirm';
import GobackButton from '~/components/common/GobackButton';
import CloseButton from '~/components/common/CloseButton';

//로그인
const StackLogin = createStackNavigator();
export default function LoginStackScreen() {
  return (
    <StackLogin.Navigator
      initialRouteName="LoginSelect"
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
      <StackLogin.Screen
        name="LoginSelect"
        component={LoginSelectScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackLogin.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
          headerLeft: () => <GobackButton />,
        }}
      />
      <StackLogin.Screen
        name="JoinSelect"
        component={JoinSelectScreen}
        options={{
          headerTitle: '회원가입',
          headerLeft: () => <GobackButton />,
        }}
      />
      <StackLogin.Screen
        name="JoinStep1"
        component={JoinStep1Screen}
        options={{
          headerTitle: '회원가입',
          headerLeft: () => <GobackButton />,
        }}
      />
      <StackLogin.Screen
        name="JoinStep2"
        component={JoinStep2Screen}
        options={{
          headerTitle: '회원가입',
          headerLeft: () => <GobackButton />,
        }}
      />
      <StackLogin.Screen
        name="JoinAddInfo"
        component={JoinAddInfoScreen}
        options={{
          headerTitle: '추가 정보 입력',
          headerLeft: () => <GobackButton />,
        }}
      />
      <StackLogin.Screen
        name="FindAccount"
        component={FindAccountScreen}
        options={{
          headerTitle: '아이디/비밀번호 찾기',
          headerLeft: () => <GobackButton />,
        }}
      />
      <StackLogin.Screen
        name="FindAccountConfirm"
        component={FindAccountConfirmScreen}
        options={{
          headerTitle: '아이디/비밀번호 찾기',
          headerLeft: () => null,
          headerRight: () => <CloseButton />,
        }}
      />
    </StackLogin.Navigator>
  );
}
