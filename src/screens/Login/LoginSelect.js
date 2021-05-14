import React from 'react';
import {
  SafeContainer,
  ScrollContainer,
  Container,
  ImageLogo,
  ImageLine,
  TextBase,
  TextBase2,
  ButtonContainer,
  ButtonLayout,
  ButtonLayoutText,
  ImageIcon,
  CautionText,
  ViewContainer,
  InfoText,
  Line,
} from './LoginSelect.styles';

const LoginSelect = ({navigation}) => {
  return (
    <SafeContainer>
      <ScrollContainer>
        <Container>
          <ImageLogo source={require('~/assets/images/common/logo.png')} />
          <TextBase>일 잘하는 알바생{'\n'}좋은 알바 자리</TextBase>
          <TextBase2>여기서 모두 서치!</TextBase2>
          <ImageLine source={require('~/assets/images/bg/bg_line.png')} />
        </Container>
        <ButtonContainer>
          <ButtonLayout
            activeOpacity={0.9}
            onPress={() => navigation.navigate('JoinSelect')}>
            <ButtonLayoutText>회원가입</ButtonLayoutText>
          </ButtonLayout>
          <ButtonLayout
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Login')}>
            <ButtonLayoutText>로그인</ButtonLayoutText>
          </ButtonLayout>
        </ButtonContainer>
        <ViewContainer>
          <Line />
          <InfoText>간편 로그인</InfoText>
          <Line />
        </ViewContainer>
        <ButtonContainer>
          <ButtonLayout activeOpacity={0.9} kakao>
            <ImageIcon
              source={require('~/assets/images/ico/ico_kakao.png')}
              kakao
            />
            <ButtonLayoutText kakao>카카오톡으로 로그인</ButtonLayoutText>
          </ButtonLayout>
          <ButtonLayout activeOpacity={0.9} naver>
            <ImageIcon
              source={require('~/assets/images/ico/ico_naver.png')}
              naver
            />
            <ButtonLayoutText naver>네이버로 로그인</ButtonLayoutText>
          </ButtonLayout>
        </ButtonContainer>
        <CautionText>※ 기업회원은 일반 로그인을 이용해주세요.</CautionText>
      </ScrollContainer>
    </SafeContainer>
  );
};

export default LoginSelect;
