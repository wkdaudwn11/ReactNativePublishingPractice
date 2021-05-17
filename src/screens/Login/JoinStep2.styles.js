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
`;

export const TimeText = styled.Text`
  position: absolute;
  right: ${normalize(130)};
  top: ${normalize(55)};
  font-size: ${normalize(26)};
  font-family: 'NanumSquareRoundR';
  color: #ff0000;
`;

export const BottomBtn = styled.TouchableOpacity`
  width: 100%;
  height: ${normalize(130)};
  background: #fff;
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
