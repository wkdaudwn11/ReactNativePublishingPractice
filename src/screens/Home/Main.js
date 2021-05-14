import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {
  SafeContainer,
  ScrollContainer,
  HeaderContainer,
  Logo,
  LogoIcon,
  NoticeButton,
  NoticeIcon,
  NoticeCount,
  NoticeCountText,
} from './Main.styles';

const Main = ({navigation}) => {
  return (
    <SafeContainer>
      <HeaderContainer>
        <Logo>
          <LogoIcon source={require('~/assets/images/common/logo.png')} />
        </Logo>
        <NoticeButton onPress={() => navigation.navigate('Notice')}>
          <NoticeIcon source={require('~/assets/images/ico/ico_alarm.png')} />
          <NoticeCount>
            <NoticeCountText>13</NoticeCountText>
          </NoticeCount>
        </NoticeButton>
      </HeaderContainer>
      <ScrollContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login', {screen: 'LoginSelect'})}>
          <Text>로그인 바로가기</Text>
        </TouchableOpacity>
      </ScrollContainer>
    </SafeContainer>
  );
};

export default Main;
