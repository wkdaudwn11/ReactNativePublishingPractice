import React from 'react';
import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const SelectButton = ({
  options = [],
  horizontal = false,
  onChangeSelect,
  selected,
}) => {
  return (
    <SelectContainer>
      {options.map((opt, index) => (
        <SelectBtn
          onPress={() => onChangeSelect(opt, index)}
          activeOpacity={0.9}>
          {selected === index && (
            <SelectBtnInner selected>
              <SelectText selected>{opt}</SelectText>
            </SelectBtnInner>
          )}
          {selected !== index && (
            <SelectBtnInner>
              <SelectText>{opt}</SelectText>
            </SelectBtnInner>
          )}
        </SelectBtn>
      ))}
    </SelectContainer>
  );
};

const SelectContainer = styled.View`
  position: absolute;
  top: ${normalize(40)};
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const SelectBtn = styled.TouchableOpacity`
  flex-direction: row;
`;
const SelectBtnInner = styled.View`
  width: ${normalize(60)};
  height: ${normalize(46)};
  margin-left: ${normalize(12)};
  background: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  ${props =>
    props.selected == true &&
    css`
      background: #ff8500;
      border: 1px solid #ff8500;
    `}
`;
const SelectText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(28)};
  color: #999;
  line-height: ${normalize(46)};
  text-align: center;
  ${props =>
    props.selected == true &&
    css`
      color: #fff;
    `}
`;

export default SelectButton;
