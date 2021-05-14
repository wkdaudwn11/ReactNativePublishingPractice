import React, {useState} from 'react';
import {
  SafeContainer,
  Container,
  SelectContainer,
  SelectBtn,
  ImageIcon,
  Exp,
  Title,
  BottomBtn,
  BottomBtnText,
} from './JoinSelect.styles';

const JoinSelect = ({navigation}) => {
  // 다음버튼 활성화
  const [isNext, setIsNext] = useState(true);

  //선택버튼 활성화
  const [isSelect, setIsSelect] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [imageIndividual, setImageIndividual] = useState(
    require('~/assets/images/ico/ico_person.png'),
  );
  const [imageCompany, setImageCompany] = useState(
    require('~/assets/images/ico/ico_building.png'),
  );

  function onPressNext() {
    setIsSelect(!isSelect);
    setIsSelect2(false);
    setImageIndividual(
      isSelect === true
        ? require('~/assets/images/ico/ico_person.png')
        : require('~/assets/images/ico/ico_person_on.png'),
    );
    setImageCompany(require('~/assets/images/ico/ico_building.png'));
    setIsNext(isSelect === true ? false : true);
  }
  function onPressNext2() {
    setIsSelect2(!isSelect2);
    setIsSelect(false);
    setImageIndividual(require('~/assets/images/ico/ico_person.png'));
    setImageCompany(
      isSelect2 === true
        ? require('~/assets/images/ico/ico_building.png')
        : require('~/assets/images/ico/ico_building_on.png'),
    );
    setIsNext(isSelect2 === true ? false : true);
  }

  return (
    <SafeContainer>
      <Container>
        <SelectContainer>
          <SelectBtn
            activeOpacity={0.8}
            onPress={() => onPressNext()}
            activeFlag={isSelect}>
            <ImageIcon source={imageIndividual} />
            <Exp activeFlag={isSelect}>일 잘하는{'\n'}알바생</Exp>
            <Title activeFlag={isSelect}>개인 회원</Title>
          </SelectBtn>
          <SelectBtn
            activeOpacity={0.8}
            second
            onPress={() => onPressNext2()}
            activeFlag={isSelect2}>
            <ImageIcon source={imageCompany} />
            <Exp activeFlag={isSelect2}>좋은 일자리</Exp>
            <Title second activeFlag={isSelect2}>
              기업 회원
            </Title>
          </SelectBtn>
        </SelectContainer>
        <BottomBtn isNext={isNext} disabled={!isNext}>
          <BottomBtnText
            isNext={isNext}
            onPress={() => navigation.navigate('JoinStep1')}>
            다음
          </BottomBtnText>
        </BottomBtn>
      </Container>
    </SafeContainer>
  );
};

export default JoinSelect;
