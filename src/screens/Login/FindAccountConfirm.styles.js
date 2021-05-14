import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ConfirmTextContainer = styled.View`
    flex:1
    justify-content: center;
    align-items: center;
    text-align:center;
`;

export const ConfirmText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(36)};
  line-height: ${normalize(50)};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  margin-left: ${normalize(32)};
  margin-right: ${normalize(32)};
  padding-bottom: ${normalize(100)};
  justify-content: flex-end;
`;

export const ButtonLayout = styled.TouchableOpacity`
  margin-top: ${normalize(20)};
  border: 1px solid #ff8500;
  border-radius: 5px;

  ${props =>
    props.login &&
    css`
      background: #ff8500;
      border-color: #ff8500;
    `}
`;

export const ButtonLayoutText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  line-height: ${normalize(92)};
  text-align: center;
  color: #ff8500;
  ${props =>
    props.login &&
    css`
      color: #fff;
    `}
`;
