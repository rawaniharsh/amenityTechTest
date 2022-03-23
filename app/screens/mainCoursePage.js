import { StyleSheet, StatusBar, SafeAreaView, View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react';
import CourseDesciptionCard from '../common/courseDesciptionCard';
import { courses } from '../constants/strings';
import CourseListCard from '../common/courseListCard';

const MainCoursePage = ({navigation}) => {

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <StatusBar hidden={true} />
      <CourseDesciptionCard {...courses[0]} />
      <FlatList
        style={{marginLeft: -8}}
        data={courses}
        renderItem={({ item, index }) => <CourseListCard item={item} index={index} navigation={navigation}/>}
        numColumns={2}
        key={'_'}
        keyExtractor={(item) => "_" + item.id}
      />
    </ScrollView>
  )
}

export default MainCoursePage;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'black'
  }
})