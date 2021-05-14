import React from 'react';
import {Text} from 'react-native';
import {
  SafeContainer,
  ConfirmTextContainer,
  ConfirmText,
  ButtonContainer,
  ButtonLayout,
  ButtonLayoutText,
} from './FindAccountConfirm.styles';

const FindAccountConfirm = ({navigation, route}) => {
  return (
    <SafeContainer>
      {route.params.names == 'id' && (
        <>
          <ConfirmTextContainer>
            <ConfirmText>
              고객님의 아이디는{'\n'}
              <Text style={{fontWeight: 'bold', color: '#FF8500'}}>
                esy5269
              </Text>
              입니다.
            </ConfirmText>
          </ConfirmTextContainer>
          <ButtonContainer>
            <ButtonLayout
              login
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Login')}>
              <ButtonLayoutText login>로그인</ButtonLayoutText>
            </ButtonLayout>
            <ButtonLayout
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('FindAccount', {names: 'FindPassword'})
              }>
              <ButtonLayoutText>비밀번호 찾기</ButtonLayoutText>
            </ButtonLayout>
          </ButtonContainer>
        </>
      )}
      {route.params.names == 'password' && (
        <>
          <ConfirmTextContainer>
            <ConfirmText>
              입력하신 핸드폰 번호로{'\n'}
              <Text style={{fontWeight: 'bold', color: '#FF8500'}}>
                임시 비밀번호
              </Text>
              가 발급 되었습니다.{'\n'}
              {'\n'}로그인 후 비밀번호 변경 바랍니다.
            </ConfirmText>
          </ConfirmTextContainer>
          <ButtonContainer>
            <ButtonLayout
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Login')}>
              <ButtonLayoutText>로그인</ButtonLayoutText>
            </ButtonLayout>
          </ButtonContainer>
        </>
      )}
    </SafeContainer>
  );
};

export default FindAccountConfirm;
