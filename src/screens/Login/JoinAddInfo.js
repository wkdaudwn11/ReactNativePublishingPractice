import React, {useState} from 'react';
import Radiobutton from '~/components/common/RadioButton';
import SelectPicker from '~/components/common/SelectPicker';
import {
  SafeContainer,
  ScrollContainer,
  InputContainer,
  InputRow,
  InputFlex,
  InputHypen,
  InputLabel,
  InputText,
  BorderContainer,
  BorderExp,
  BottomBtn,
  BottomBtnText,
} from './JoinAddInfo.styles';

const JoinAddInfo = ({navigation}) => {
  // 다음버튼 활성화
  const [isNext, setIsNext] = useState(true);
  const [selected, setSelected] = useState(0);
  const [selected2, setSelected2] = useState(0);

  return (
    <SafeContainer>
      <ScrollContainer>
        <InputContainer>
          <InputRow>
            <InputLabel>외국인 인가요?</InputLabel>
            <Radiobutton
              selected={selected}
              options={['아니요', '네']}
              horizontal={false}
              onChangeSelect={(opt, i) => {
                setSelected(i);
              }}
            />
          </InputRow>
          <InputRow>
            <InputLabel>주민번호 입력</InputLabel>
            <InputFlex>
              <InputText keyboardType="numeric" textOrange flexContent />
              <InputHypen>-</InputHypen>
              <InputText keyboardType="numeric" textOrange flexContent />
            </InputFlex>
          </InputRow>
          <InputRow>
            <InputLabel>보건증 소지 여부</InputLabel>
            <Radiobutton
              selected={selected2}
              options={['발급 받았어요', '아직 없어요.']}
              horizontal={false}
              onChangeSelect={(opt, i) => {
                setSelected2(i);
              }}
            />
          </InputRow>
        </InputContainer>
        <BorderContainer>
          <BorderExp>계약 후 급여 받을 통장을 입력하여주세요.</BorderExp>
          <InputContainer>
            <InputRow>
              <InputLabel>은행</InputLabel>
              <SelectPicker />
            </InputRow>
            <InputRow>
              <InputLabel>계좌번호</InputLabel>
              <InputText
                keyboardType="numeric"
                placeholder="계좌번호 입력"
                placeholderTextColor="#c4c4c4"
                textOrange
              />
            </InputRow>
            <InputRow>
              <InputLabel>예금주</InputLabel>
              <InputText textOrange />
            </InputRow>
          </InputContainer>
        </BorderContainer>
      </ScrollContainer>
      <BottomBtn activeOpacity={0.9} isNext={isNext} disabled={!isNext}>
        <BottomBtnText
          isNext={isNext}
          onPress={() => navigation.navigate('JoinStep1')}>
          완료
        </BottomBtnText>
      </BottomBtn>
    </SafeContainer>
  );
};

export default JoinAddInfo;
