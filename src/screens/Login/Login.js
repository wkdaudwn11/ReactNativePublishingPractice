import React from 'react';
import {
  SafeContainer,
  ScrollContainer,
  Container,
  ImageLogo,
  InputContainer,
  InputRow,
  InputLabel,
  InputText,
  ButtonContainer,
  ButtonLayout,
  ButtonLayoutText,
  UtilButtonContainer,
  UtilButton,
  UtilButtonText,
  UtilBar,
} from './Login.styles';
import CautionText from '~/components/common/CautionText';

const Login = ({navigation, route}) => {
  return (
    <SafeContainer>
      <ScrollContainer>
        <Container>
          <ImageLogo source={require('~/assets/images/common/logo.png')} />
        </Container>
        <InputContainer>
          <InputRow>
            <InputLabel>아이디</InputLabel>
            <InputText />
          </InputRow>
          <InputRow>
            <InputLabel>비밀번호</InputLabel>
            <InputText secureTextEntry={true} />
            <CautionText
              text="가입하지 않은 아이디이거나, 잘못된 비밀번호입니다."
              type="type2"
            />
          </InputRow>
        </InputContainer>
        <ButtonContainer>
          <ButtonLayout activeOpacity={0.9}>
            <ButtonLayoutText>로그인</ButtonLayoutText>
          </ButtonLayout>
        </ButtonContainer>
        <UtilButtonContainer>
          <UtilButton
            onPress={() =>
              navigation.navigate('FindAccount', {names: 'FindId'})
            }>
            <UtilButtonText>아이디 찾기</UtilButtonText>
          </UtilButton>
          <UtilBar>|</UtilBar>
          <UtilButton
            onPress={() =>
              navigation.navigate('FindAccount', {names: 'FindPassword'})
            }>
            <UtilButtonText>비밀번호 찾기</UtilButtonText>
          </UtilButton>
        </UtilButtonContainer>
      </ScrollContainer>
    </SafeContainer>
  );
};

export default Login;
