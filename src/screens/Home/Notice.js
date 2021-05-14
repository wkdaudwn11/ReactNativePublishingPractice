import React from 'react';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';
import FlatListType from '~/components/FlatList';

const Notice = () => {
  return (
    <SafeContainer>
      <ScrollContainer>
        <FlatListType />
      </ScrollContainer>
    </SafeContainer>
  );
};

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
const ScrollContainer = styled.ScrollView`
  margin-left: ${normalize(32)};
  margin-right: ${normalize(32)};
`;

export default Notice;
