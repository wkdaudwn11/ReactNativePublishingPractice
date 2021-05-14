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

export const HeaderContainer = styled.View`
  position: relative;
  height: ${normalize(100)};
`;

export const Logo = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${normalize(-87)};
  margin-top: ${normalize(-28)};
`;

export const LogoIcon = styled.Image`
  width: ${normalize(174)};
  height: ${normalize(56)};
`;

export const NoticeButton = styled.TouchableOpacity`
  position: absolute;
  top: ${normalize(30)};
  right: ${normalize(32)};
  z-index: 9;
`;

export const NoticeIcon = styled.Image`
  width: ${normalize(34)};
  height: ${normalize(40)};
`;

export const NoticeCount = styled.View`
  position: absolute;
  right: ${normalize(30)};
  top: ${normalize(1)};
  min-width: ${normalize(40)};
  padding-left: ${normalize(8)};
  padding-right: ${normalize(8)};
  background: #ff0000;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;

export const NoticeCountText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(22)};
  color: #fff;
  line-height: ${normalize(30)};
  text-align: center;
`;
