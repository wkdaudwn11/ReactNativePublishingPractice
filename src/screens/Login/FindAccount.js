import React, {useEffect, useState} from 'react';
import CautionText from '~/components/common/CautionText';
import CustomButton from '~/components/common/CustomButton';
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
  TabContainer,
  TabButton,
  TabText,
} from './FindAccount.styles';

const FindAccount = ({navigation, route}) => {
  // 다음버튼 활성화
  const [isNext, setIsNext] = useState(true);
  // 현재 스크린 탭 활성화
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    setIsActive(route.params.names);
  });

  return (
    <SafeContainer>
      <TabContainer>
        <TabButton
          onPress={() => navigation.setParams({names: 'FindId'})}
          isActive={isActive == 'FindId' ? true : false}
          activeOpacity={1}>
          <TabText isActive={isActive == 'FindId' ? true : false}>
            아이디 찾기
          </TabText>
        </TabButton>
        <TabButton
          onPress={() => navigation.setParams({names: 'FindPassword'})}
          isActive={isActive == 'FindPassword' ? true : false}
          activeOpacity={1}>
          <TabText isActive={isActive == 'FindPassword' ? true : false}>
            비밀번호 찾기
          </TabText>
        </TabButton>
      </TabContainer>
      {route.params.names == 'FindId' && (
        <>
          <ScrollContainer>
            <InputContainer>
              <InputRow>
                <InputLabel>이름</InputLabel>
                <InputText
                  placeholder="성 + 이름"
                  placeholderTextColor="#c4c4c4"
                />
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
            </InputContainer>
          </ScrollContainer>
          <BottomBtn activeOpacity={0.9} isNext={isNext} disabled={!isNext}>
            <BottomBtnText
              isNext={isNext}
              onPress={() =>
                navigation.navigate('FindAccountConfirm', {names: 'id'})
              }>
              아이디 찾기
            </BottomBtnText>
          </BottomBtn>
        </>
      )}
      {route.params.names == 'FindPassword' && (
        <>
          <ScrollContainer>
            <InputContainer>
              <InputRow>
                <InputLabel>아이디</InputLabel>
                <InputText
                  placeholder="영문 + 숫자 최소 6자 이상"
                  placeholderTextColor="#c4c4c4"
                />
              </InputRow>
              <InputRow>
                <InputLabel>이름</InputLabel>
                <InputText
                  placeholder="성 + 이름"
                  placeholderTextColor="#c4c4c4"
                />
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
            </InputContainer>
          </ScrollContainer>
          <BottomBtn activeOpacity={0.9} isNext={isNext} disabled={!isNext}>
            <BottomBtnText
              isNext={isNext}
              onPress={() =>
                navigation.navigate('FindAccountConfirm', {names: 'password'})
              }>
              비밀번호 찾기
            </BottomBtnText>
          </BottomBtn>
        </>
      )}
    </SafeContainer>
  );
};

export default FindAccount;
