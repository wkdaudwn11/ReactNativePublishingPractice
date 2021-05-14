import React from 'react';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const CloseButton = () => {
  const navigation = useNavigation();

  return (
    <Close onPress={() => navigation.goBack()}>
      <ImageClose source={require('~/assets/images/ico/ico_close.png')} />
    </Close>
  );
};

const Close = styled.TouchableOpacity`
  position: absolute;
  right: ${normalize(16)};
  top: 0;
  width: ${normalize(100)};
  height: ${normalize(100)};
`;
const ImageClose = styled.Image`
  position: absolute;
  right: 50%;
  top: 50%;
  width: ${normalize(30)};
  height: ${normalize(30)};
  margin-top: ${normalize(-15)};
  margin-right: ${normalize(-8)};
`;

export default CloseButton;
