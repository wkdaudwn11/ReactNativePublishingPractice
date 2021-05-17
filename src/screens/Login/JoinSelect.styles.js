import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SelectContainer = styled.View`
  flex-direction: row;
`;

export const SelectBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${normalize(323)};
  height: ${normalize(500)};
  background: #fff;
  border: 1px solid #ff8500;
  border-radius: 5px;
  text-align: center;
  ${props =>
    props.activeFlag == true &&
    css`
      background: #ff8500;
    `}
  ${props =>
    props.second &&
    css`
      margin-left: ${normalize(10)};
    `}
`;

export const ImageIcon = styled.Image`
  width: ${normalize(120)};
  height: ${normalize(86)};
`;

export const Exp = styled.Text`
  margin-top: ${normalize(30)};
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(28)};
  color: #ff8500;
  text-align: center;
  ${props =>
    props.activeFlag == true &&
    css`
      color: #fff;
    `}
`;

export const Title = styled.Text`
  margin-top: ${normalize(56)};
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  color: #ff8500;
  ${props =>
    props.activeFlag == true &&
    css`
      color: #fff;
    `}
  ${props =>
    props.second &&
    css`
      margin-top: ${normalize(88)};
    `}
`;

export const BottomBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${normalize(130)};
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${props => (props.isNext === false ? '#999' : '#FF8500')};
`;

export const BottomBtnText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  color: ${props => (props.isNext === false ? '#999' : '#FF8500')};
`;
