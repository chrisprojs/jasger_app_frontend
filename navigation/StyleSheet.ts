import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyle";
const { height, width } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  inputbox: {
    width: 319,
    height: 53,
    marginTop: "3%",
    // backgroundColor: Color.black,
  },
  inputbox2: {
    width: 319,
    height: 86,
    marginTop: "3%",
    // backgroundColor: Color.black,
  },
  inputlabel: {
    fontFamily: FontFamily.interBold,
    fontSize: 12,
  },
  inputbar1: {
    width: 319,
    height: 33,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Color.gray,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
  },
  inputtext1: {
    fontFamily: FontFamily.interRegular,
    fontSize: 12,
    color: Color.gray,
    width: 300,
  },
  inputbar2: {
    width: 319,
    height: 66,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Color.gray,
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
  },
  inputtext2: {
    display: "flex",
    fontFamily: FontFamily.interRegular,
    fontSize: 12,
    color: Color.gray,
    width: 300,
  },
  inputpicker: {
    position: "relative",
    top: -11,
    padding: 0,
    width: 330,
  },
  inputpickerItem: {
    fontFamily: FontFamily.interRegular,
    fontWeight: "normal",
    color: Color.gray,
    fontSize: 12, // Customize the font size here
  },
  bodywhite: {
    width: width,
    height: height,
    backgroundColor: Color.white,
    flex: 1,
    alignItems: "center",
  },
  bodysplash: {
    width: width,
    height: height,
    backgroundColor: Color.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyregistration: {
    width: width,
    height: height,
    backgroundColor: Color.purple,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logsignpart1: {
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.interExtrabold,
    fontSize: 12,
  },
  logsignpart2: {
    width: 235,
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  modalpart1: {
    position: 'absolute',
    width: 38,
    height: 38,
    left: '80%',
    top: 16,
  },
  modalpart2: {
    marginTop: '20%',
    marginHorizontal: '10%',
  },
  modalpart3: {
    fontFamily: FontFamily.interRegular,
    fontSize: 12,
  },
  modalpart4: {
    fontFamily: FontFamily.interBlack,
    fontSize: 12,
    textAlign:'right',
  },
  modalpart5: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    top: '80%',
  },
  bidpart1: {
    width: width,
    height: height,
    backgroundColor: Color.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chooseroletext:{
    width: 215,
    height: 44,
    fontFamily: FontFamily.interRegular,
    fontSize: 36,
    textAlign: 'center'
  },
  rolepart1: {
    width: 131,
    height: 130,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.black,
    borderStyle: 'solid',
    borderRadius: 10,
    margin: '3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rolepart2: {
    fontFamily: FontFamily.interRegular,
    fontSize: 12
  },
});

export const settingStyles = StyleSheet.create({
  settinglist: {
    height: 32,
    width: "100%",
    borderColor: Color.gray,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const listStyles = StyleSheet.create({
  listBar: {
    width: 130,
    position: "relative",
    marginTop: "10%",
    justifyContent: "space-between",
    marginBottom: "2%",
    flexDirection: "row",
    left: -100,
  },
  listBarText: {
    fontFamily: FontFamily.interRegular,
    color: Color.gray,
    fontSize: 12,
    textAlign: "center",
  },
  listBarTextActive: {
    fontFamily: FontFamily.interBold,
    color: Color.purple,
    fontSize: 12,
    textAlign: "center",
    borderBottomColor: Color.purple,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  listbox: {
    marginTop: "5%",
    width: 319,
  },
  listcard: {
    width: 319,
    height: 148,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.black,
    borderRadius: 10,
    marginBottom: '3%',
    alignItems: "center",
  },
  listFirstButton: {
    width: 85,
    height: 30,
    marginRight: '3%',
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.purple,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  listSecondButton: {
    width: 85,
    height: 30,
    backgroundColor: Color.purple,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  listcardpart1: {width: 300, marginTop: '3%', marginBottom: '3%'},
  listcardpart2: {flexDirection: 'row', justifyContent: 'space-between'},
  listcardpart3: {fontFamily: FontFamily.interBold, fontSize: 12},
  listcardpart4: {fontFamily: FontFamily.interMedium, fontSize: 12},
  listcardpart5: {height: 32, fontSize: 12, fontFamily: FontFamily.interRegular, color: Color.gray},
  listcardpart6: {height: 32, fontSize: 12, fontFamily: FontFamily.interRegular},
  listcardpart7: {flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%', alignItems: "center"},
  listcardpart8: {fontFamily: FontFamily.interBold, fontSize: 12},
  listcardpart9: {flexDirection: 'row'},
  listcardpart10: {color: Color.purple, fontFamily: FontFamily.interMedium, fontSize: 12},
  listcardpart11: {color: Color.white, fontFamily: FontFamily.interMedium, fontSize: 12}
});

export const homeStyles = StyleSheet.create({
  homeBody: {
    width: width,
    height: height,
    backgroundColor: Color.purple,
    flex: 1,
    alignItems: "center",
  },
  homeQuotesBox: {
    position: "relative",
    marginTop: "10%",
    marginBottom: "2%",
  },
  homeQuotes: {
    textAlign: "center",
    fontFamily: FontFamily.interExtrabold,
    fontSize: 20,
  },
  homePlaceOrder: {
    marginTop: "3%",
    width: 235,
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  homePlaceOrderText: {
    fontFamily: FontFamily.interExtrabold,
    color: Color.purple,
    fontSize: 24,
    textAlign: "center",
  },
  homecardpart1: {
    width: 319,
    height: 90,
    marginBottom: '3%',
    backgroundColor: Color.white,
    borderColor: Color.black,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  homecardpart2: {marginLeft:'6%', width:214, height: 32, fontSize: 12, fontFamily: FontFamily.interRegular, color: Color.gray},
  homecardpart3: {marginLeft:'6%', width:214, height: 32, fontSize: 12, fontFamily: FontFamily.interRegular, color: Color.black},
  homecardpart4: {
    width: 60,
    height: 52,
    backgroundColor: Color.purple,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homecardpart5: {
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    fontSize: 12
  },
  homecardpart6: { flexDirection: "row", alignItems: "center", justifyContent: "space-between"},
});


