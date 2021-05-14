import React from 'react';
import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const CustomButton = props => {
  const {
    title = 'untitled',
    borderColor = '#C4C4C4',
    titleColor = '#999',
    type = 'type1',
    active = false,
    onPress = () => {},
    ...restProps
  } = props;

  return (
    <BorderButton
      borderColor={`${borderColor}`}
      onPress={`${onPress}`}
      type={`${type}`}
      active={`${active}`}
      activeOpacity={0.9}>
      <BorderButtonText
        titleColor={`${titleColor}`}
        active={`${active}`}>{`${title}`}</BorderButtonText>
    </BorderButton>
  );
};

const BorderButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: ${normalize(26)};
  padding-left: ${normalize(32)};
  padding-right: ${normalize(32)};
  background-color: #fff;
  border: 1px solid ${props => props.borderColor};
  border-radius: 5px;
  ${props =>
    props.active === true &&
    css`
      background-color: #ff8500;
      border-color: #ff8500;
    `}
`;
const BorderButtonText = styled.Text`
  font-size: ${normalize(28)};
  color: ${props => props.titleColor};
  line-height: ${normalize(58)};
  ${props =>
    props.active === true &&
    css`
      color: #fff;
    `}
`;

export default CustomButton;
