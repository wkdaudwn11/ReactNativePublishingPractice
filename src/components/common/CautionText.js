import React from 'react';
import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const CautionText = ({text, type}) => {
  return <CautionTextStyle type={type}>{text}</CautionTextStyle>;
};

const CautionTextStyle = styled.Text`
  position: absolute;
  left: 0;
  bottom: ${normalize(60)};
  font-size: ${normalize(26)};
  color: #ff0000;
  ${props =>
    props.type === 'type2' &&
    css`
      bottom: 0;
    `}
`;

export default CautionText;
