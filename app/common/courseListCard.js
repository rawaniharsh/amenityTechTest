import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CourseListCard = ({ item, index, navigation }) => {
  
  return (
    <View style={styles.cardImageContainer} key={index}>
      <TouchableOpacity style={{ width: 175, height: 80, backgroundColor: item.color, borderRadius: 5 }} activeOpacity={0.6}
        onPress={() => {
          navigation.navigate('courseDescription', item);
        }}
      >
        <Icon name="heart-o" color="#4F8EF7" size={15} style={{ position: 'absolute', top: 5, left: 140 }} />
      </TouchableOpacity>
      <Text style={styles.courseName}>{item.name}</Text>
      <View style={styles.durationContainer}>
        <Icon
          name="calendar"
          color="#8f8c85"
          size={12} />
        <Text style={styles.durationDays}>{item.days}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardImageContainer: {
    paddingVertical: 10,
    paddingLeft: 12
  },
  courseName: {
    fontSize: 14,
    color: '#cfcbc4',
    fontFamily: 'sans-serif-medium'
  },
  durationContainer: {
    flexDirection: 'row'
  },
  durationDays: {
    fontSize: 12,
    color: '#8f8c85',
    fontFamily: 'sans-serif-medium',
    paddingLeft: 5
  }
})

export default CourseListCard