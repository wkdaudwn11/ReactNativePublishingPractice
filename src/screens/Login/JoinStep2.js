import React, {useState} from 'react';
import CautionText from '~/components/common/CautionText';
import CustomButton from '~/components/common/CustomButton';
import SelectButton from '~/components/common/SelectButton';
import {
  SafeContainer,
  ScrollContainer,
  InputContainer,
  InputRow,
  InputLabel,
  InputText,
  TimeText,
  BottomBtn,
  BottomBtnText,
} from './JoinStep2.styles';

const JoinStep2 = ({navigation}) => {
  // 다음버튼 활성화
  const [isNext, setIsNext] = useState(true);

  //우편번호 검색 상세주소입력창노출
  const [showPost, setShowPost] = useState(false);

  //성별선택
  const [selected, setSelected] = useState(0);

  function onPressPost() {
    setShowPost(!showPost);
  }

  return (
    <SafeContainer>
      <ScrollContainer>
        <InputContainer>
          <InputRow>
            <InputLabel>이름</InputLabel>
            <InputText placeholder="성 + 이름" placeholderTextColor="#c4c4c4" />
          </InputRow>
          <InputRow>
            <InputLabel>핸드폰 번호</InputLabel>
            <InputText
              keyboardType="numeric"
              placeholder="‘-’ 없이 숫자만 입력"
              placeholderTextColor="#c4c4c4"
              textOrange
            />
            <CustomButton title={'인증'} />
            {/* <CustomButton title={'재전송'}></CustomButton> */}
            {/* <CustomButton title={'인증완료'}></CustomButton> */}
          </InputRow>
          <InputRow>
            <InputLabel>인증번호</InputLabel>
            <InputText
              keyboardType="numeric"
              placeholder="6자리 입력"
              placeholderTextColor="#c4c4c4"
            />
            <CustomButton title={'확인'} />
            <TimeText>02:00</TimeText>
            <CautionText text="인증번호가 맞지 않습니다." />
          </InputRow>
          <InputRow>
            <InputLabel>생년월일</InputLabel>
            <InputText
              keyboardType="numeric"
              placeholder="6자리 입력"
              placeholderTextColor="#c4c4c4"
            />
            <SelectButton
              selected={selected}
              options={['여', '남']}
              horizontal={false}
              onChangeSelect={(opt, i) => {
                setSelected(i);
              }}
            />
          </InputRow>
          <InputRow>
            <InputLabel>이메일</InputLabel>
            <InputText
              placeholder="‘@’ 포함 모두 입력"
              placeholderTextColor="#c4c4c4"
              textOrange
            />
            <CautionText text="이메일 양식이 틀렸습니다." />
          </InputRow>
          <InputRow>
            <InputLabel>주소</InputLabel>
            <InputText textOrange editable={false} />
            {showPost && <InputText textOrange />}
            <CustomButton
              title={'우편번호 검색'}
              type={'type2'}
              onPress={() => onPressPost()}
            />
          </InputRow>
        </InputContainer>
      </ScrollContainer>
      <BottomBtn activeOpacity={0.9} isNext={isNext} disabled={isNext}>
        <BottomBtnText
          isNext={isNext}
          onPress={() => navigation.navigate('JoinAddInfo')}>
          완료
        </BottomBtnText>
      </BottomBtn>
    </SafeContainer>
  );
};

export default JoinStep2;
