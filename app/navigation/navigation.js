import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainCoursePage from "../screens/mainCoursePage";
import CourseDescriptionPage from "../screens/courseDescriptionPage";

const Stack = createNativeStackNavigator();

function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="mainCourse">
        <Stack.Screen
          name="courseDescription"
          component={CourseDescriptionPage}
        />
        <Stack.Screen
          name="mainCourse"
          component={MainCoursePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;