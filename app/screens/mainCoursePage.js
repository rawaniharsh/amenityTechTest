import { StyleSheet, StatusBar, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import CourseDesciptionCard from '../common/courseDesciptionCard';
import { courses } from '../constants/strings';
import Icon from 'react-native-vector-icons/FontAwesome';

const mainCoursePage = () => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <CourseDesciptionCard {...courses[0]} />
      <View style={styles.cardImageContainer}>
        <TouchableOpacity style={{ width: 160, height: 80, backgroundColor: 'white', borderRadius: 5 }} activeOpacity={0.6}>
          <Icon name="heart-o" color="#4F8EF7" size={15} style={{ position: 'absolute', top: 5, left: 140 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default mainCoursePage

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  cardImageContainer: {
    paddingLeft: 30,
    paddingVertical: 20
  }
})