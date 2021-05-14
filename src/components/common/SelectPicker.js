import React, {useState} from 'react';
import {SafeAreaView, Modal} from 'react-native';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';
import {ModalPicker} from '~/components/common/ModalPicker';

const SelectPicker = () => {
  const [chooseData, setchooseData] = useState('은행 선택');
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = bool => {
    setisModalVisible(bool);
  };

  const setData = option => {
    setchooseData(option);
  };

  return (
    <SafeAreaView>
      <Container onPress={() => changeModalVisibility(true)} activeOpacity={1}>
        <SelectText>{chooseData}</SelectText>
        <Arrow source={require('~/assets/images/ico/arw_down.png')} />
      </Container>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  position: relative;
  height: ${normalize(70)};
  padding: 0;
  border-bottom-width: 1px;
  border-bottom-color: #999;
`;
const SelectText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(28)};
  color: #c4c4c4;
  line-height: ${normalize(70)};
`;
const Arrow = styled.Image`
  position: absolute;
  right: ${normalize(20)};
  top: ${normalize(30)};
  width: ${normalize(32)};
  height: ${normalize(18)};
`;

export default SelectPicker;
