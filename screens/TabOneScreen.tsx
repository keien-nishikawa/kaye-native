import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../components/Themed';
import { ListItem, Avatar } from 'react-native-elements'

export default function TabOneScreen() {
  const timelineData: {
    id: number
    title: string
    thumbnail?: string
    author: string
    dateTime: string
  }[] = [
      {
        id: 1, title: '今季のチーム目標に関するMTG',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年1月5日 20:00'
      },
      {
        id: 2, title: '2020年2月1日 チームMTG',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年1月10日 20:00'
      },
      {
        id: 3, title: '本日のセレクション風景',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年1月20日 20:00'
      },
      {
        id: 4, title: '4年生送別会について',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年2月1日 20:00'
      },
      {
        id: 5, title: '卒業の進路先紹介',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年2月3日 20:00'
      },
      {
        id: 6, title: '監督の独り言',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年4月1日 18:00'
      },
      {
        id: 7, title: '新入部員紹介',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年4月1日 18:00'
      },
      {
        id: 8, title: 'マネージャー紹介',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年4月10日 18:00'
      },
      {
        id: 9, title: '光星学院高校との練習試合風景',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhpFLYCTN5dOF7wo2cNZwM3OmojVRKjK31Q&usqp=CAU',
        author: '西川 継延', dateTime: '2021年4月20日 18:00'
      },
    ]

  const renderTimeLine = () => {
    console.log(timelineData.length)
    return timelineData.map((e) => (
      <ListItem key={e.id} containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.cardTitle}>{e.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.cardSubtitle}>{e.author}</ListItem.Subtitle>
          <ListItem.Subtitle style={styles.cardSubtitle}>{e.dateTime}</ListItem.Subtitle>
        </ListItem.Content>
        <Avatar size="large" source={{ uri: e.thumbnail }} />
      </ListItem>
    ))
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        {renderTimeLine()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  card: {
    backgroundColor: '#000',
    color: '#fff'
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold'
  },
  cardSubtitle: {
    color: 'white',
    marginTop: 5,
    fontSize: 14
  }
});
