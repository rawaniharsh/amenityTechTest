import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import mainCoursePage from "../screens/mainCoursePage";
import courseDescriptionPage from "../screens/courseDescriptionPage";

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
          component={courseDescriptionPage}
        />
        <Stack.Screen
          name="mainCourse"
          component={mainCoursePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;