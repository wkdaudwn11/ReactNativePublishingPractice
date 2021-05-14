import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const OPTIONS = ['우리은행', '신한은행', '국민은행'];

const ModalPicker = props => {
  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <ModalOption key={index} onPress={() => onPressItem(item)}>
        <ModalText>{item}</ModalText>
      </ModalOption>
    );
  });

  return (
    <Container onPress={() => props.changeModalVisibility(false)}>
      <ModalContainer>
        <ScrollView>{option}</ScrollView>
      </ModalContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;
const ModalContainer = styled.View`
  background: #fff;
  width: 90%;
  padding-top: ${normalize(20)};
  padding-bottom: ${normalize(20)};
  border-radius: 5px;
`;
const ModalOption = styled.TouchableOpacity``;
const ModalText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(32)};
  padding-top: ${normalize(15)};
  padding-bottom: ${normalize(15)};
  text-align: center;
`;
export {ModalPicker};
