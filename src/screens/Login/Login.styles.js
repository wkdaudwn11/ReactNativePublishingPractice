import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ScrollContainer = styled.ScrollView`
  margin-left: ${normalize(32)};
  margin-right: ${normalize(32)};
`;

export const Container = styled.View`
  flex: 1;
  height: ${normalize(430)};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImageLogo = styled.Image`
  width: ${normalize(250)};
  height: ${normalize(80)};
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const InputRow = styled.View`
  flex: 1;
  position: relative;
  padding-bottom: ${normalize(40)};
`;

export const InputLabel = styled.Text`
  margin-bottom: ${normalize(10)};
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(28)};
  color: #333;
`;

export const InputText = styled.TextInput`
  height: ${normalize(100)};
  padding-left: ${normalize(30)};
  padding-right: ${normalize(30)};
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-size: ${normalize(28)};
  line-height: ${normalize(100)};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  margin-top: ${normalize(110)};
`;

export const ButtonLayout = styled.TouchableOpacity`
  position: relative;
  margin-top: ${normalize(20)};
  background: #ff8500;
  border: 1px solid #ff8500;
  border-radius: 5px;
`;

export const ButtonLayoutText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  line-height: ${normalize(92)};
  text-align: center;
  color: #fff;
`;

export const UtilButtonContainer = styled.View`
  flex: 1;
  margin-top: ${normalize(50)};
  text-align: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
`;

export const UtilButton = styled.TouchableOpacity``;

export const UtilButtonText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(28)};
  color: #999;
`;

export const UtilBar = styled.Text`
  margin-left: ${normalize(30)};
  margin-right: ${normalize(30)};
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(28)};
  color: #999;
`;
