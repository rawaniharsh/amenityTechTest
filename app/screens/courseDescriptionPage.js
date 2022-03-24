import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CourseDesciptionCard from '../common/courseDesciptionCard';
import { courses } from '../constants/strings';

const CourseDescriptionPage = (props) => {
  return (
    <View style={styles.mainContainer}>
       <CourseDesciptionCard {...props.route.params} />
    </View>
  )
}

export default CourseDescriptionPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  }
})