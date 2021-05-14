import styled, {css} from 'styled-components/native';
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
  height: ${normalize(940)};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImageLogo = styled.Image`
  width: ${normalize(250)};
  height: ${normalize(80)};
`;

export const ImageLine = styled.Image`
  margin-top: ${normalize(-5)};
  width: ${normalize(380)};
  height: ${normalize(22)};
`;

export const TextBase = styled.Text`
  margin-top: ${normalize(140)};
  text-align: center;
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(38)};
  line-height: ${normalize(50)};
  color: #ff8500;
`;

export const TextBase2 = styled.Text`
  margin-top: ${normalize(50)};
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(38)};
  color: #ff8500;
  z-index: 1;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const ButtonLayout = styled.TouchableOpacity`
  position: relative;
  margin-top: ${normalize(20)};
  border: 1px solid #ff8500;
  border-radius: 5px;

  ${props =>
    props.kakao &&
    css`
      background: #ffe900;
      border-color: #ffe900;
    `}
  ${props =>
    props.naver &&
    css`
      background: #2db400;
      border-color: #2db400;
    `}
`;

export const ButtonLayoutText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(30)};
  line-height: ${normalize(92)};
  text-align: center;
  color: #ff8500;
  ${props =>
    props.kakao &&
    css`
      color: #666;
    `}
  ${props =>
    props.naver &&
    css`
      color: #fff;
    `}
`;

export const ImageIcon = styled.Image`
  position: absolute;
  left: ${normalize(30)};
  top: 50%;
  height: ${normalize(30)};
  margin-top: ${normalize(-10)};
  ${props =>
    props.kakao &&
    css`
      width: ${normalize(32)};
    `}
  ${props =>
    props.naver &&
    css`
      width: ${normalize(30)};
    `}
`;

export const CautionText = styled.Text`
  margin-top: ${normalize(20)};
  margin-bottom: ${normalize(60)};
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(25)};
  color: #ff0000;
  text-align: center;
`;

export const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: ${normalize(60)};
  margin-bottom: ${normalize(40)};
`;

export const InfoText = styled.Text`
  position: relative;
  z-index: 1;
  padding-left: ${normalize(17)};
  padding-right: ${normalize(17)};
  background: #fff;
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(28)};
  color: #999;
`;

export const Line = styled.View`
  position: absolute;
  left: 0;
  top: ${normalize(16)};
  width: 100%;
  height: 1px;
  background: #c4c4c4;
`;
