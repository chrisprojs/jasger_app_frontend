import { StyleSheet, Text, View, Image, TextInput, ScrollView, Modal, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { globalStyles, listStyles, homeStyles } from "../StyleSheet";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyle";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListScreen() {
  const [listBar, setListBar] = useState("Ongoing");
  const [filterData, setFilterData] = useState([]);
  const [role, setRole] = useState("mager");
  const [selectedCard, setSelectedCard] = useState(null);
  const [bidClick, setBidClick] = useState(null);
  const [changeBid, setChangeBid] = useState("");

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
    bid: "80000" },
    {
    id: 1,
    email_recipient: "kimkardazian@email.com",
    email_driver: "lelnapz@email.com",
    recipient: "Kim Kardazian",
    driver: "Lel Nap Z",
    area: "Binus Syahdan",
    status: "Order Complete",
    detail_location: "Ruang kelas 405, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Am Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "70000" },
    { id: 2,
    email_recipient: "kimkardazian@email.com",
    email_driver: "lelnapz@email.com",
    recipient: "Kim Kardazian",
    driver: "Lel Nap Z",
    area: "Binus Kijang",
    status: "On Delivery",
    detail_location: "Ruang kelas 406, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Mr Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "60000" },
    { id: 3,
    email_recipient: "kimkardazian@email.com",
    email_driver: "",
    recipient: "Kim Kardazian",
    driver: "",
    area: "Binus Syahdan",
    status: "Canceled",
    detail_location: "Ruang kelas 407, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Mrs Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "50000" },
    { id: 4,
    email_recipient: "kimkardazian@email.com",
    email_driver: "",
    recipient: "Kim Kardazian",
    driver: "",
    area: "Binus Anggrek",
    status: "Finding Jasger",
    detail_location: "Ruang kelas 404, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Om Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "80000" },
    { 
    id: 5,
    email_recipient: "kimkardazian@email.com",
    email_driver: "lelnapz@email.com",
    recipient: "Kim Kardazian",
    driver: "Lel Nap Z",
    area: "Binus Syahdan",
    status: "Order Complete",
    detail_location: "Ruang kelas 405, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Am Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "70000" },
    { id: 6,
    email_recipient: "kimkardazian@email.com",
    email_driver: "lelnapz@email.com",
    recipient: "Kim Kardazian",
    driver: "Lel Nap Z",
    area: "Binus Kijang",
    status: "On Delivery",
    detail_location: "Ruang kelas 406, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Mr Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "60000" },
    { id: 7,
    email_recipient: "kimkardazian@email.com",
    email_driver: "",
    recipient: "Kim Kardazian",
    driver: "",
    area: "Binus Syahdan",
    status: "Canceled",
    detail_location: "Ruang kelas 407, di lantai 4 tunggu di luar kelas (jangan masuk ke kelas)",
    list_order: "Pesan Mie Bakso Mrs Razil; Mie Ayam 1, Bakso Om Razil 1 pakai pangsit goyeng, dan Bakso Urat Om Razil 1",
    bid: "50000" },
  ];

  useEffect(() => {
    if (listBar === "Ongoing") {
      setFilterData(data.filter((item) => item.status === "Finding Jasger" || item.status === "On Delivery"));
    } else if (listBar === "History") {
      setFilterData(data.filter((item) => item.status === "Order Complete" || item.status === "Canceled"));
    }
  }, [listBar]);

  const handleCardPress = (item) => {
    setSelectedCard(item);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleCancel = (data) => {
    console.log("Canceled" + data.id)
  }

  const handleChangeBid = (data) => {
    console.log("Change Bid" + data.id)
    setBidClick(data)
  }

  const confirmChangeBid = () => {
    console.log("Change bid - "+ bidClick.id + " to "+changeBid)
    setBidClick(null)
    setChangeBid("")
  }

  const handleComplete = (data) => {
    console.log("Order Complete" + data.id)
  }

  return (
    <View style={globalStyles.bodywhite}>
      <View style={listStyles.listBar}>
        <Text
          style={listBar === "Ongoing" ? listStyles.listBarTextActive : listStyles.listBarText}
          onPress={() => setListBar("Ongoing")}
        >
          Ongoing
        </Text>
        <Text
          style={listBar === "History" ? listStyles.listBarTextActive : listStyles.listBarText}
          onPress={() => setListBar("History")}
        >
          History
        </Text>
      </View>
      <ScrollView style={listStyles.listbox}>
        {filterData.map((item) => (
          <TouchableOpacity key={item.id} style={listStyles.listcard} onPress={() => handleCardPress(item)}>
            <View style={listStyles.listcardpart1}>
              <View style={listStyles.listcardpart2}>
                <Text style={listStyles.listcardpart3}>{item.area}</Text>
                <Text
                  style={[
                    listStyles.listcardpart4,
                    item.status === "Finding Jasger" && { color: 'orange' },
                    item.status === "On Delivery" && { color: Color.lightgreen },
                    item.status === "Order Complete" && { color: Color.green },
                    item.status === "Canceled" && { color: 'red' }
                  ]}
                >
                  {item.status}
                </Text>
              </View>
              <Text style={listStyles.listcardpart5}>{item.detail_location}</Text>
              <Text style={listStyles.listcardpart6}>{item.list_order}</Text>
              <View style={listStyles.listcardpart7}>
                <Text style={listStyles.listcardpart8}>Rp. {item.bid}</Text>
                <View style={listStyles.listcardpart9}>
                  {role === "mager" && item.status === "Finding Jasger" && (
                    <>
                      <TouchableOpacity style={listStyles.listFirstButton} onPress={() => handleCancel(item)}>
                        <Text style={listStyles.listcardpart10}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={listStyles.listSecondButton} onPress={() => handleChangeBid(item)}>
                        <Text style={listStyles.listcardpart11}>Change Bid</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {role === "jasger" && item.status === "Order Complete" && (
                    <>
                      <TouchableOpacity style={listStyles.listFirstButton} onPress={() => handleCancel(item)}>
                        <Text style={listStyles.listcardpart10}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={listStyles.listSecondButton} onPress={() => handleComplete(item)}>
                        <Text style={listStyles.listcardpart11}>Complete</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal visible={selectedCard !== null} animationType="slide">
        <View style={globalStyles.bodywhite}>
          <View style={globalStyles.modalpart2}>
          <View style={listStyles.listcardpart2}>
                <Text style={listStyles.listcardpart3}>{selectedCard?.area}</Text>
                <Text
                  style={[
                    listStyles.listcardpart4,
                    selectedCard?.status === "Finding Jasger" && { color: 'orange' },
                    selectedCard?.status === "On Delivery" && { color: Color.lightgreen },
                    selectedCard?.status === "Order Complete" && { color: Color.green },
                    selectedCard?.status === "Canceled" && { color: 'red' }
                  ]}
                >
                  {selectedCard?.status}
                </Text>
              </View>
            <View style={{marginTop: '3%'}}>
                <Text>Recipient:</Text>
                <Text style={globalStyles.modalpart3}>{selectedCard?.recipient}</Text>
            </View>
            <View style={{marginTop: '3%'}}>
                <Text>Driver:</Text>
                <Text style={globalStyles.modalpart3}>{selectedCard?.driver}</Text>
            </View>
            <View style={{marginTop: '3%'}}>
                <Text>Detail Location:</Text>
                <Text style={globalStyles.modalpart3}>{selectedCard?.detail_location}</Text>
            </View>
            <View style={{marginTop: '3%'}}>
                <Text>List Order:</Text>
                <Text style={globalStyles.modalpart3}>{selectedCard?.detail_location}</Text>
            </View>
            <View style={{marginTop: '10%'}}>
              <Text style={globalStyles.modalpart4}>Rp. {selectedCard?.bid}</Text>
            </View>
            <View style={globalStyles.modalpart5}>
                  {role === "mager" && selectedCard?.status === "Finding Jasger" && (
                    <>
                      <TouchableOpacity style={listStyles.listFirstButton} onPress={() => {handleCancel(selectedCard); handleCloseModal()}}>
                        <Text style={listStyles.listcardpart10}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={listStyles.listSecondButton} onPress={() => {handleChangeBid(selectedCard); handleCloseModal()}}>
                        <Text style={listStyles.listcardpart11}>Change Bid</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {role === "jasger" && selectedCard?.status === "On Delivery" && (
                    <>
                      <TouchableOpacity style={listStyles.listFirstButton} onPress={() => {handleCancel(selectedCard); handleCloseModal()}}>
                        <Text style={listStyles.listcardpart10}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={listStyles.listSecondButton}  onPress={() => {handleComplete(selectedCard); handleCloseModal()}}>
                        <Text style={listStyles.listcardpart11}>Complete</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
          </View>
          <TouchableOpacity style={globalStyles.modalpart1} onPress={handleCloseModal}>
            <Ionicons name="close" size={38} color={Color.gray}></Ionicons>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal visible={bidClick != null} animationType="slide">
          <View style={globalStyles.bidpart1}>
          <View style={globalStyles.inputbox}>
          <Text style={[globalStyles.inputlabel, { color: Color.black }]}>
            Your Bid
          </Text>
          <View style={globalStyles.inputbar1}>
            <TextInput
              value={changeBid}
              style={globalStyles.inputtext1}
              placeholder="Enter Your Bid"
              onChangeText={(text) => setChangeBid(text)}
            />
          </View>
          </View>
          <TouchableOpacity style={[listStyles.listSecondButton, {marginTop: '3%'}]} onPress={()=>confirmChangeBid()}>
              <Text style={listStyles.listcardpart11}>Confirm</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={globalStyles.modalpart1} onPress={() => {setBidClick(null);setChangeBid("")}}>
            <Ionicons name="close" size={38} color={Color.gray}></Ionicons>
          </TouchableOpacity>
      </Modal>
    </View>
  );
}
