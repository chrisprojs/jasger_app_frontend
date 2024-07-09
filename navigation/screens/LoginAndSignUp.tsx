import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { globalStyles, homeStyles, listStyles } from "../StyleSheet";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LoginAndSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [boolLogsign, setBoolLogsign] = useState(true);
  const [role, setRole] = useState("");

  const changelogsign = () => {
    setBoolLogsign(!boolLogsign);
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleSignUp = () => {
    if (email.length != 0 && name.length != 0 && password.length != 0) {
    }
  };

  return (
    <View style={globalStyles.bodyregistration}>
      <View style={{ alignItems: "center" }}>
        {boolLogsign ? (
          <Text style={[homeStyles.homeQuotes, { color: Color.white }]}>
            Login
          </Text>
        ) : (
          <Text style={[homeStyles.homeQuotes, { color: Color.white }]}>
            Sign Up
          </Text>
        )}
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>
            Email
          </Text>
          <View style={globalStyles.inputbar1}>
            <TextInput
              value={email}
              style={globalStyles.inputtext1}
              placeholder="Enter Email"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>
            Name
          </Text>
          <View style={globalStyles.inputbar1}>
            <TextInput
              value={name}
              style={globalStyles.inputtext1}
              placeholder="Enter Name"
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>
            Password
          </Text>
          <View style={globalStyles.inputbar1}>
            <TextInput
              value={password}
              style={globalStyles.inputtext1}
              placeholder="Enter Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
        </View>
        {boolLogsign == true ? (
          <>
            <View style={globalStyles.inputbox}>
              <Text style={globalStyles.logsignpart1}>
                Don't Have Account?{" "}
                <Text
                  style={{ color: Color.lightblue }}
                  onPress={() => changelogsign()}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
            <TouchableOpacity style={globalStyles.logsignpart2}>
              <Text style={homeStyles.homePlaceOrderText}>Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={globalStyles.inputbox}>
              <Text style={globalStyles.logsignpart1}>
                Already Have Account?{" "}
                <Text
                  style={{ color: Color.lightblue }}
                  onPress={() => changelogsign()}
                >
                  Login
                </Text>
              </Text>
            </View>
            <TouchableOpacity style={globalStyles.logsignpart2}>
              <Text
                style={homeStyles.homePlaceOrderText}
                onPress={() => handleSignUp()}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
