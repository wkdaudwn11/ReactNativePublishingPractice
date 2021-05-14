import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const RadioButton = ({
  options = [],
  horizontal = false,
  onChangeSelect,
  selected,
}) => {
  return (
    <RadioContainer>
      {options.map((opt, index) => (
        <RadioBtn
          onPress={() => onChangeSelect(opt, index)}
          activeOpacity={0.9}>
          <View>
            {selected === index && (
              <Circle
                source={require('~/assets/images/ico/ico_radio_on.png')}
              />
            )}
            {selected !== index && (
              <Circle source={require('~/assets/images/ico/ico_radio.png')} />
            )}
          </View>
          <RadioText>{opt}</RadioText>
        </RadioBtn>
      ))}
    </RadioContainer>
  );
};

const RadioContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${normalize(20)};
`;
const RadioBtn = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: ${normalize(70)};
`;
const Circle = styled.Image`
  width: ${normalize(30)};
  height: ${normalize(30)};
`;
const RadioText = styled.Text`
  margin-left: ${normalize(12)};
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(26)};
  color: #666;
`;

export default RadioButton;
