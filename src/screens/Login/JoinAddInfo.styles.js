import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  margin-left: ${normalize(32)};
  margin-right: ${normalize(32)};
`;

export const InputContainer = styled.View`
  flex: 1;
  margin-left: ${normalize(30)};
  margin-right: ${normalize(30)};
`;

export const InputRow = styled.View`
  flex: 1;
  position: relative;
  padding-bottom: ${normalize(100)};
`;

export const InputFlex = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const InputHypen = styled.Text`
  flex-basis: ${normalize(76)};
  font-size: ${normalize(28)};
  line-height: ${normalize(70)};
  text-align: center;
`;

export const InputLabel = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  color: #333;
`;

export const InputText = styled.TextInput`
  height: ${normalize(70)};
  padding: 0;
  border-bottom-width: 1px;
  border-bottom-color: #999;
  font-size: ${normalize(28)};
  line-height: ${normalize(70)};
  color: ${props => (props.textOrange ? '#FF8500' : '#000')};
  ${props =>
    props.flexContent &&
    css`
      flex: 1;
    `}
`;

export const BorderContainer = styled.View`
  flex: 1;
  padding-top: ${normalize(60)};
  padding-bottom: ${normalize(60)};
  margin-bottom: ${normalize(100)};
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const BorderExp = styled.Text`
  margin-bottom: ${normalize(80)};
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(30)};
  text-align: center;
`;

export const BottomBtn = styled.TouchableOpacity`
  width: 100%;
  height: ${normalize(130)};
  background: #fff;
  justify-content: center;
  align-items: center;
  bordertopwidth: 1px;
  bordertopcolor: ${props => (props.isNext === false ? '#999' : '#FF8500')};
`;

export const BottomBtnText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  color: ${props => (props.isNext === false ? '#999' : '#FF8500')};
`;
