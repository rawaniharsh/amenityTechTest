import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CourseDesciptionCard = (props) => {
  return (
    <View>
      <Image style={{marginTop: -25}} source={require('../assets/courseImage.jpg')} />
      <Icon name="heart-o" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 5, left: 370 }} />
      <Text style={styles.courseName}>{props.name}</Text>
      <View style={styles.durationContainer}>
        <Icon
          name="calendar"
          color="#8f8c85"
          size={12} />
        <Text style={styles.durationDays}>{props.days}</Text>
        <Icon
          style={{ paddingTop: 2, paddingLeft: 10 }}
          name="clock-o"
          color="#8f8c85"
          size={12} />
        <Text style={styles.durationDays}>{props.time}</Text>
      </View>
      <View style={styles.IconContainer}>
        <View style={styles.IconContainerView}>
          <Icon
            name="bell-slash"
            color="#8f8c85"
            size={20} />
        </View>
        <View style={[styles.IconContainerView, { marginLeft: 20 }]}>
          <Icon
            name="share"
            color="#4F8EF7"
            size={20} />
        </View>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: '#52504e',
          borderBottomWidth: 1,
          padding: 12,
          width: 362,
          alignSelf: 'center'
        }}
      />
      <View style={styles.aboutCourseContainer}>
        <Text style={styles.aboutCourseTitle}>
          About Course
        </Text>
        <Icon
          style={{ marginLeft: 252 }}
          color="#4F8EF7"
          size={18}
          name="arrow-up"
        />
      </View>
      <Text style={styles.courseDescText}>{props.desc}</Text>
      <View
        style={{
          borderBottomColor: '#52504e',
          borderBottomWidth: 1,
          padding: 12,
          width: 362,
          alignSelf: 'center'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  courseName: {
    fontSize: 20,
    color: '#cfcbc4',
    paddingTop: 18,
    paddingLeft: 30,
    fontFamily: 'sans-serif-medium'
  },
  durationContainer: {
    flexDirection: 'row',
    paddingLeft: 30,
  },
  IconContainer: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingTop: 16
  },
  durationDays: {
    fontSize: 12,
    color: '#8f8c85',
    fontFamily: 'sans-serif-medium',
    paddingLeft: 5
  },
  IconContainerView: {
    height: 30, width: 30, borderRadius: 5, backgroundColor: '#52504e', justifyContent: 'center', alignItems: 'center'
  },
  startBtn: {
    backgroundColor: '#52504e',
    height: 30,
    borderRadius: 5,
    width: 100,
    marginLeft: 185,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startText: {
    fontSize: 14,
    color: '#4F8EF7',
    fontFamily: 'sans-serif-medium',
    paddingLeft: 5
  },
  aboutCourseContainer: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingVertical: 12
  },
  aboutCourseTitle: {
    fontSize: 15,
    color: '#4F8EF7',
    fontFamily: 'sans-serif-medium',
    paddingLeft: 5,
  },
  courseDescText: {
    fontSize: 13,
    color: '#cfcbc4',
    fontFamily: 'sans-serif-medium',
    paddingHorizontal: 30,
  }
})

export default CourseDesciptionCard;