import { StyleSheet, Dimensions } from "react-native";
const screen = Dimensions.get("screen");

const styles = StyleSheet.create({

  buttonGoogle: {
    borderRadius: 10,
    backgroundColor: '#57BCFF',
    width:screen.width / 1.3,
    height: screen.height / 16,
    paddingLeft:20,
    paddingRight:20,
  },
  text: {
    color: 'white',
    textAlign: "center",
    paddingRight: 50
  }
});

export default styles;
