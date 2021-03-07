import * as React from 'react';
import { StyleSheet, SectionList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, Text } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View>
      <Calendar
        monthFormat={'yyyy年 MM月'}
        markingType={'custom'}
        // markedDates={{
        //   '2021-01-15': { marked: true, dotColor: '#006fcf' },
        //   '2021-01-20': { marked: true, dotColor: '#006fcf' },
        //   '2021-01-24': { marked: true, dotColor: '#006fcf' },
        //   '2021-01-21': { marked: true, dotColor: '#006fcf' },
        // }}
        theme={{
          textDisabledColor: 'gray',
          calendarBackground: '#121214',
          dayTextColor: 'white',
          monthTextColor: 'white',
          textSectionTitleColor: 'white',
          arrowColor: 'white',
          selectedDayTextColor: 'white',
        }}
        onDayPress={(day) => { console.log('selected day', day) }}
        hideExtraDays={true}
      />
      <View>
        <SectionList
          sections={[
            { title: '9:30', data: ['午前練 Aチーム'] },
            { title: '14:00', data: ['午後練 Bチーム'] },
            { title: '18:30', data: ['ミーティング'] },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

LocaleConfig.locales.jp = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
};
LocaleConfig.defaultLocale = 'jp';

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#008CFF',
    color: 'white'
  },
  item: {
    padding: 10,
    fontSize: 16,
    height: 44,
    fontWeight: 'bold',
  },
});
