import { StyleSheet, StatusBar, SafeAreaView, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react';
import CourseDesciptionCard from '../common/courseDesciptionCard';
import { courses } from '../constants/strings';
import CourseListCard from '../common/courseListCard';

const MainCoursePage = () => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <CourseDesciptionCard {...courses[0]} />
      <FlatList
        data={courses}
        renderItem={CourseListCard}
        numColumns={2}
        key={'_'}
        keyExtractor={(item) => "_" + item.id}
      />
    </SafeAreaView>
  )
}

export default MainCoursePage

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'black'
  }
})