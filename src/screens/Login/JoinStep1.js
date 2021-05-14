import React, {useState} from 'react';
import CautionText from '~/components/common/CautionText';
import {
  SafeContainer,
  ScrollContainer,
  InputContainer,
  InputRow,
  InputLabel,
  InputText,
  BottomBtn,
  BottomBtnText,
} from './JoinStep1.styles';

const JoinStep1 = ({navigation}) => {
  // 다음버튼 활성화
  const [isNext, setIsNext] = useState(true);

  return (
    <SafeContainer>
      <ScrollContainer>
        <InputContainer>
          <InputRow>
            <InputLabel>아이디</InputLabel>
            <InputText
              placeholder="영문 + 숫자 최소 6자 이상"
              placeholderTextColor="#c4c4c4"
            />
            <CautionText text="이미 사용중인 아이디입니다." />
          </InputRow>
          <InputRow>
            <InputLabel>비밀번호</InputLabel>
            <InputText
              secureTextEntry={true}
              placeholder="특수기호 + 영문 + 숫자 최소 8자 이상"
              placeholderTextColor="#c4c4c4"
            />
            <CautionText text="특수문자 + 영문 + 숫자 최소 8자 이상 입력 바랍니다." />
          </InputRow>
          <InputRow>
            <InputLabel>비밀번호 확인</InputLabel>
            <InputText
              secureTextEntry={true}
              placeholder="특수기호 + 영문 + 숫자 최소 8자 이상"
              placeholderTextColor="#c4c4c4"
            />
            <CautionText text="비밀번호가 일치 하지 않습니다." />
          </InputRow>
        </InputContainer>
      </ScrollContainer>
      <BottomBtn activeOpacity={0.9} isNext={isNext} disabled={!isNext}>
        <BottomBtnText
          isNext={isNext}
          onPress={() => navigation.navigate('JoinStep2')}>
          다음
        </BottomBtnText>
      </BottomBtn>
    </SafeContainer>
  );
};

export default JoinStep1;
