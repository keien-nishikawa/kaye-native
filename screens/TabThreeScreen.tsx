import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { ListItem } from 'react-native-elements'

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.firstCard}>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.cardTitle}>{'部活ノートを書く'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.cardTitle}>{'部活ノート一覧'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.cardTitle}>{'欠席申請'}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ backgroundColor: "#121214" }}>
          <ListItem.Content>
            <ListItem.Title style={styles.cardTitle}>{'過去の申請'}</ListItem.Title>
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
    backgroundColor: '#000',
    color: '#fff'
  },
  cardTitle: {
    color: 'white'
  }
});
