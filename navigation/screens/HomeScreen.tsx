import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { globalStyles, homeStyles, listStyles } from "../StyleSheet";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyle";

export default function HomeScreen() {
  const [areaSelected, setAreaSelected] = useState("");
  const [recipient, setRecipient] = useState("");
  const [location, setLocation] = useState("");
  const [order, setOrder] = useState("");
  const [bid, setBid] = useState("");
  const [role, setRole] = useState("mager");

  const data = [
    { id: 0,
      email_recipient: "kimkardazian@email.com",
      email_driver: "",
      recipient: "Kim Kardazian",
      driver: "",
      area: "Binus Anggrek",
      status: "Finding Jasger",
      detail_location: "Ruang kelas 404, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
      list_order: "Pesan Mie Bakso Om Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
      bid: "80000"},
      { 
        id: 1,
        email_recipient: "kimkardayayan@email.com",
        email_driver: "",
        recipient: "Kim Kardayayan",
        driver: "",
        area: "Binus Syahdan",
        status: "Finding Jasger",
        detail_location: "Ruang kelas 403, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
        list_order: "Pesan Mie Bakso Om Rajil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
        bid: "70000"},
  ]



  const area = [
    { key: "1", value: "Binus Anggrek" },
    { key: "2", value: "Binus Syahdan" },
    { key: "3", value: "Binus Kijang" },
  ];

  if (role == "mager") {
    return (
      <View style={homeStyles.homeBody}>
        <View style={homeStyles.homeQuotesBox}>
          <Text style={[homeStyles.homeQuotes, { color: Color.white }]}>
            Kamu Mager? Pesen Jasger Aja!
          </Text>
        </View>
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>Recipient</Text>
          <View style={globalStyles.inputbar1}>
            <TextInput
              value={recipient}
              style={globalStyles.inputtext1}
              placeholder="Enter Recipient"
              onChangeText={(text) => setRecipient(text)}
            />
          </View>
        </View>
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>
            Area
          </Text>
          <View style={globalStyles.inputbar1}>
            <Picker
              selectedValue={areaSelected}
              style={globalStyles.inputpicker}
              onValueChange={(itemValue) => setAreaSelected(itemValue)}
            >
              <Picker.Item
                style={globalStyles.inputpickerItem}
                label="Select Area"
                value=""
              />
              {area.map((item) => (
                <Picker.Item
                  style={globalStyles.inputpickerItem}
                  key={item.key}
                  label={item.value}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={globalStyles.inputbox2}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>Detail Location</Text>
          <View style={globalStyles.inputbar2}>
            <TextInput
              multiline
              value={location}
              style={globalStyles.inputtext2}
              placeholder="Enter Detail Location"
              onChangeText={(text) => setLocation(text)}
            />
          </View>
        </View>
        <View style={globalStyles.inputbox2}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>List Order</Text>
          <View style={globalStyles.inputbar2}>
            <TextInput
              multiline
              value={order}
              style={globalStyles.inputtext2}
              placeholder="Enter List Order"
              onChangeText={(text) => setOrder(text)}
            />
          </View>
        </View>
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.white }]}>Your Bid</Text>
          <View style={globalStyles.inputbar1}>
            <TextInput
              value={bid}
              style={globalStyles.inputtext1}
              placeholder="Enter Your Bid"
              onChangeText={(text) => setBid(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={homeStyles.homePlaceOrder}>
          <Text style={homeStyles.homePlaceOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (role == "jasger") {
    return (
      <View style={globalStyles.bodywhite}>
        <View style={homeStyles.homeQuotesBox}>
          <Text style={[homeStyles.homeQuotes, { color: Color.purple }]}>
            Buat Gerakmu Jadi Cuanmu
          </Text>
        </View>
        <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.purple }]}>
            Area
          </Text>
          <View style={globalStyles.inputbar1}>
            <Picker
              selectedValue={areaSelected}
              style={globalStyles.inputpicker}
              onValueChange={(itemValue) => setAreaSelected(itemValue)}
            >
              <Picker.Item
                style={globalStyles.inputpickerItem}
                label="Select Area"
                value=""
              />
              {area.map((item) => (
                <Picker.Item
                  style={globalStyles.inputpickerItem}
                  key={item.key}
                  label={item.value}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <ScrollView style={listStyles.listbox}>
          {data.map((item) => (
          <View key={item.id} style={homeStyles.homecardpart1}>
            <View style={listStyles.listcardpart1}>
              <View style={homeStyles.homecardpart6}>
                <View>
                <Text style={homeStyles.homecardpart2}>
                  {item.detail_location}
                </Text>
                <Text style={homeStyles.homecardpart3}>
                  {item.list_order}
                </Text>
                </View>
                <View style={homeStyles.homecardpart4}>
                  <Text key={item.id} style={homeStyles.homecardpart5}>Pick</Text>
                </View>
              </View>
            </View>
          </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
