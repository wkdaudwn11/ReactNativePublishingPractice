import React from 'react';
import {FlatList} from 'react-native';

import styled, {css} from 'styled-components/native';
import {normalize} from '~/components/styles/ResponsiveSize';

const DATA = [
  {
    id: 'id1',
    category: '스크랩',
    text: '스크랩한 기업의 신규 공고가 올라왔습니다.',
    img: require('~/assets/images/ico/ico_paper.png'),
    heightType: '3',
    date: '2021.04.21',
  },
  {
    id: 'id2',
    category: '업데이트',
    text: '공고에 지원을 위해 주민번호를 업데이트 해주세요',
    img: require('~/assets/images/ico/ico_update.png'),
    heightType: '4',
    date: '2021.04.21',
  },
  {
    id: 'id3',
    category: '스크랩',
    text: '‘트리플에이전시’의 공고마감 3일전 입니다.',
    img: require('~/assets/images/ico/ico_paper.png'),
    heightType: '3',
    date: '2021.04.21',
  },
  {
    id: 'id4',
    category: '포지션 제안',
    text: '‘트리플에이전시’에서 포지션 제안이 왔습니다.',
    img: require('~/assets/images/ico/ico_hands.png'),
    heightType: '2',
    date: '2021.04.21',
  },
  {
    id: 'id5',
    category: '평점/추천서',
    text: '평점/추천서가 업데이트 되었습니다.',
    img: require('~/assets/images/ico/ico_circle_star.png'),
    heightType: '3',
    date: '2021.04.21',
  },
  {
    id: 'id6',
    category: '출근 요청',
    text: '‘트리플에이전시’에서 출근 요청이 왔습니다.',
    img: require('~/assets/images/ico/ico_caution.png'),
    heightType: '3',
    date: '2021.04.21',
  },
  {
    id: 'id7',
    category: '출근 예정',
    text: '‘트리플에이전시’ 출근 3일전 입니다.',
    img: require('~/assets/images/ico/ico_paper.png'),
    heightType: '2',
    date: '2021.04.21',
  },
  {
    id: 'id8',
    category: '출근 취소',
    text: '‘트리플에이전시’에서 출근 취소 되었습니다.',
    img: require('~/assets/images/ico/ico_docu2.png'),
    heightType: '1',
    date: '2021.04.21',
  },
];

const Item = ({text, category, date, img, heightType}) => (
  <Container>
    <Category>[{category}]</Category>
    <Para>{text}</Para>
    <Date>{date}</Date>
    <Icon source={img} heightType={heightType} />
  </Container>
);

const FlatListType = () => {
  const renderItem = ({item}) => (
    <Item
      text={item.text}
      category={item.category}
      date={item.date}
      img={item.img}
      heightType={item.heightType}
    />
  );

  return (
    <SafeContainer>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeContainer>
  );
};

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;
const Container = styled.View`
  position: relative;
  margin-bottom: ${normalize(20)};
  padding-left: ${normalize(100)};
  padding-right: ${normalize(30)};
  padding-top: ${normalize(30)};
  padding-bottom: ${normalize(30)};
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;
const Category = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: ${normalize(28)};
  color: #333;
`;
const Para = styled.Text`
  margin-top: ${normalize(20)};
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(28)};
  color: #666;
`;
const Date = styled.Text`
  margin-top: ${normalize(50)};
  font-family: 'NanumSquareRoundR';
  font-size: ${normalize(26)};
  color: #c4c4c4;
  text-align: right;
`;
const Icon = styled.Image`
  position: absolute;
  left: ${normalize(30)};
  top: ${normalize(30)};
  width: ${normalize(40)};
  ${props =>
    props.heightType === '1' &&
    css`
      height: ${normalize(36)};
    `}
  ${props =>
    props.heightType === '2' &&
    css`
      height: ${normalize(38)};
    `}
    ${props =>
    props.heightType === '3' &&
    css`
      height: ${normalize(40)};
    `}
    ${props =>
    props.heightType === '4' &&
    css`
      height: ${normalize(46)};
    `}
`;

export default FlatListType;
