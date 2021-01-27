import * as React from 'react';
// import { StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View } from '../components/Themed';

export default function TabTwoScreen() {

  return (
    <View>
      <Calendar
        monthFormat={'yyyy年 MM月'}
        markingType={'period'}
        markedDates={{
          '2021-01-15': { marked: true, dotColor: '#006fcf' },
          '2021-01-20': { marked: true, dotColor: '#006fcf' },
          '2021-01-24': { marked: true, dotColor: '#006fcf' },
          '2021-01-21': { marked: true, dotColor: '#006fcf' },
        }}
        theme={{
          textDisabledColor: 'gray',
          calendarBackground: '#121214',
          dayTextColor: 'white',
          monthTextColor: 'white',
          textSectionTitleColor: 'white',
          arrowColor: 'white',
          selectedDayTextColor: 'white'
        }}
      />
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

