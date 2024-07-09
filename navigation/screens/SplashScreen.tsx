import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { globalStyles } from "../StyleSheet";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyle";

const SplashScreen = () => {
    const { width, height } = Dimensions.get("window");
  return (
    <View style={globalStyles.bodysplash}>
      <Image source={require("../../assets/Jasger_Logo.png")}
      style={{ width: width * 0.5, height: height * 0.5 }}
      resizeMode="contain"
      ></Image>
    </View>
  );
};

export default SplashScreen;
