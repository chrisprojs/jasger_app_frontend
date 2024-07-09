import { Modal, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import SettingScreen from "./screens/SettingScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginAndSignUp } from "./screens/LoginAndSignUp";
import { globalStyles, homeStyles, listStyles } from "./StyleSheet";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const [user, setUser] = useState(
    // [{
    // access_token: "893478378",
    // refresh_token:"987938475",
    // user_email:"kimkardazian@email.com",
    // user_name:"Kim Kardazian",
    // user_role: "mager",
    // }]
    null
  );

  if (user != null && user?.user_role != "") {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false, // Hide the header
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (rn === "List") {
                iconName = focused ? "book" : "book-outline";
              } else if (rn === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "purple", // Color of the active tab icon and label
            tabBarInactiveTintColor: "gray", // Color of the inactive tab icon and label
            tabBarLabelStyle: styles.tabBarLabel, // Style for the tab label
            tabBarStyle: styles.tabBar, // Style for the tab bar
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="List" component={ListScreen} />
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
   else if (user != null && user?.user_role == "") {
    return(
    <Modal visible={user?.user_role == ""} animationType="slide">
      <View style={globalStyles.bidpart1}>
        <View style={homeStyles.homeQuotesBox}>
          <Text style={globalStyles.chooseroletext}>Choose Role</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={globalStyles.rolepart1}>
            <Image
              source={require("../assets/kingcrown.png")}
              style={{ width: 79, height: 87 }}
            ></Image>
            <Text style={globalStyles.rolepart2}>Orang Mager</Text>
          </View>
          <View style={globalStyles.rolepart1}>
            <Ionicons name="walk-outline" size={79}></Ionicons>
            <Text style={globalStyles.rolepart2}>Orang Jasger</Text>
          </View>
        </View>
      </View>
    </Modal>
    )
  } else {
    return <LoginAndSignUp />;
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  tabBarLabel: {
    fontSize: 12,
  },
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingBottom: 4,
  },
});
