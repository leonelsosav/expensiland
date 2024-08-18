import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

interface CalendarViewProps {
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
  data: any;
}

export default function CalendarView({ selectedDate, onDateSelect, data }: CalendarViewProps) {
  const markedDates = {
    ...Object.keys(data).reduce((acc: { [key: string]: any }, date) => {
      acc[date] = {
        marked: true,
        dots: [{ key: 'event', color: 'red' }],
        selected: selectedDate === date,
        selectedColor: selectedDate === date ? '#1E90FF' : undefined,
        selectedTextColor: selectedDate === date ? 'white' : undefined,
      };
      return acc;
    }, {}),
    ...(selectedDate && {
      [selectedDate]: {
        selected: true,
        selectedColor: '#1E90FF',
        selectedTextColor: 'white',
      },
    }),
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedDates}
      markingType={'multi-dot'}
      onDayPress={(day: { dateString: string; }) => {
        onDateSelect(day.dateString);
      }}
      theme={{
        calendarBackground: 'white',
        textSectionTitleColor: 'black',
        selectedDayBackgroundColor: '#1E90FF',
        selectedDayTextColor: 'white',
        todayTextColor: '#1E90FF',
        dayTextColor: 'black',
        textDisabledColor: '#d9e1e8',
        arrowColor: 'black',
        monthTextColor: 'black',
        indicatorColor: 'black',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '500',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
});