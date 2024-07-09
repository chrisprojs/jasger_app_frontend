import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyles, settingStyles} from "../StyleSheet";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyle";

export default function SettingScreen() {
  const [aboutus, setAboutus] = useState(false)

  const { width, height } = Dimensions.get("window");

  return (
    <View style={globalStyles.bodywhite}>
      <View style={{flexDirection: 'row', alignItems: "center", marginTop: '10%', marginRight: '40%'}}>
        <Ionicons name="person-circle" size={92}></Ionicons>
        <Text>Kim Kardazian</Text>
      </View>
      <TouchableOpacity style={settingStyles.settinglist}>
        <View style={{flexDirection: 'row', width: '90%', alignItems: "center"}}>
        <Ionicons name="log-out-outline" size={19} style={{paddingRight: 5}} color={Color.gray}></Ionicons>
        <Text style={{fontFamily: FontFamily.interRegular, color: 'gray', fontSize: 12}}>Logout</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[settingStyles.settinglist, {borderBottomWidth: 0.5}]} onPress={()=>setAboutus(true)}>
        <View style={{flexDirection: 'row', width: '90%', alignItems: "center"}}>
        <Ionicons name="information-circle-outline" size={19} style={{paddingRight: 5}} color={Color.gray}></Ionicons>
        <Text style={{fontFamily: FontFamily.interRegular, color: 'gray', fontSize: 12}}>About Us</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={aboutus} animationType="slide">
          <View style={globalStyles.bidpart1}>
            <Image source={require("../../assets/binus_logo.png")}
            style={{ width: width * 0.6, height: height * 0.2 }}></Image>
            <Image source={require("../../assets/Team_Logo.jpg")}
            style={{ width: width * 0.3, height: height * 0.2, marginTop: '10%'}}></Image>
          </View>
          <TouchableOpacity style={globalStyles.modalpart1} onPress={() => setAboutus(false)}>
            <Ionicons name="close" size={38} color={Color.gray}></Ionicons>
          </TouchableOpacity>
      </Modal>
    </View>
  )
}