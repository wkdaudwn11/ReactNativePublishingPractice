import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const Home = () => {
  return (
    <SafeContainer>
      <ScrollContainer>
        <Text>Management</Text>
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

export default Home;
