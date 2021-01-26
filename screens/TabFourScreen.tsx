import * as React from 'react';
import { StyleSheet, SectionList } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View>
      <SectionList
        sections={[
          { title: '各種機能', data: ['部活ノート', '欠席申請'] },
          { title: 'ガイド・お問い合わせ', data: ['ガイド', 'お問い合わせ'] },
          { title: 'その他の設定', data: ['個人情報設定', 'お知らせ・機能設定'] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    color: 'black'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
