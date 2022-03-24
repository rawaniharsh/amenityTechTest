import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;

const CourseDesciptionCard = (props) => {

  return (
    <View>
      <Image style={{marginTop: hp*0.03}} source={require('../assets/courseImage.jpg')} />
      <Icon name="heart-o" color="#4F8EF7" size={25} style={{ position: 'absolute', top: hp*0.04, left: wp-10 }} />
      <Text style={styles.courseName}>{props.name}</Text>
      <View style={styles.durationContainer}>
        <Icon
         style={{ paddingTop: hp*0.003}}
          name="calendar"
          color="#8f8c85"
          size={12} />
        <Text style={styles.durationDays}>{props.days}</Text>
        <Icon
          style={{ paddingTop: hp*0.003, paddingLeft: wp*0.04 }}
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
        <View style={[styles.IconContainerView, { marginLeft: wp*0.05 }]}>
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
          width: wp*0.92,
          alignSelf: 'center'
        }}
      />
      <View style={styles.aboutCourseContainer}>
        <Text style={styles.aboutCourseTitle}>
          About Course
        </Text>
        <Icon
          style={{ marginLeft: wp*0.59 }}
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
          width: wp*0.92,
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
    paddingTop: hp*0.02,
    paddingLeft: wp*0.12,
    fontFamily: 'sans-serif-medium'
  },
  durationContainer: {
    flexDirection: 'row',
    paddingLeft:  wp*0.125,
  },
  IconContainer: {
    flexDirection: 'row',
    paddingLeft: wp*0.12,
    paddingTop: hp*0.03
  },
  durationDays: {
    fontSize: 12,
    color: '#8f8c85',
    fontFamily: 'sans-serif-medium',
    paddingLeft: wp*0.01
  },
  IconContainerView: {
    height: hp*0.05, width: hp*0.05, borderRadius: 5, backgroundColor: '#52504e', justifyContent: 'center', alignItems: 'center'
  },
  startBtn: {
    backgroundColor: '#52504e',
    height:  hp*0.05,
    borderRadius: 5,
    width: wp*0.28,
    marginLeft: wp*0.39,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startText: {
    fontSize: 14,
    color: '#4F8EF7',
    fontFamily: 'sans-serif-medium',
    paddingLeft: wp*0.02
  },
  aboutCourseContainer: {
    flexDirection: 'row',
    paddingLeft: wp*0.11,
    paddingVertical: hp*0.018
  },
  aboutCourseTitle: {
    fontSize: 17,
    color: '#4F8EF7',
    fontFamily: 'sans-serif-medium',
    paddingLeft: wp*0.009,
  },
  courseDescText: {
    fontSize: 13,
    color: '#cfcbc4',
    fontFamily: 'sans-serif-medium',
    paddingHorizontal: wp*0.12,
  }
})

export default CourseDesciptionCard;