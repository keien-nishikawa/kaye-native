import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { ListItem, Avatar } from 'react-native-elements'

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.firstCard}>
        <ListItem containerStyle={{ backgroundColor: "#121214" }}>
          <Avatar size="large" rounded source={{ uri: 'https://www.wantedly.com/users/140616179/avatar?h=500&t=1607830098&w=500' }} />
          <ListItem.Content>
            <ListItem.Title style={styles.cardTitle}>{'西川 継延'}</ListItem.Title>
            <ListItem.Subtitle style={styles.cardSubtitle}>{'1996年6月21日'}</ListItem.Subtitle>
            <ListItem.Subtitle style={styles.cardSubtitle}>{'1%の改善でも1年続ければ37倍になる'}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={styles.secondCard}>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'プロフィール写真'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'個人情報'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'パスワード変更'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'緊急連絡先'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }}>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'住所情報'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={styles.secondCard}>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'ガイド'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'お問い合わせ'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }}>
          <ListItem.Content>
            <ListItem.Title style={styles.card}>{'ログアウト'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  firstCard: {
    marginBottom: 10
  },
  secondCard: {
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    color: 'white',
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    color: 'white',
    marginTop: 3,
    fontSize: 14
  }
});
