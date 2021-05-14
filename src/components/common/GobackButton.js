import React from 'react';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const GobackButton = () => {
  const navigation = useNavigation();

  return (
    <Arrow onPress={() => navigation.goBack()}>
      <ImageArrow source={require('~/assets/images/ico/arw_gray_left.png')} />
    </Arrow>
  );
};

const Arrow = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  width: ${normalize(100)};
  height: ${normalize(100)};
`;
const ImageArrow = styled.Image`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${normalize(24)};
  height: ${normalize(38)};
  margin-top: ${normalize(-13)};
  margin-left: ${normalize(-8)};
`;

export default GobackButton;
