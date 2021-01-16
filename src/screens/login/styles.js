import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 10,
    height: 40,
    borderColor: '#57BCFF',
    borderWidth: 1,
    color: 'black',
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10,
    width: screen.width / 1.3,
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#57BCFF',
    marginTop: 10,
    width: screen.width / 1.3,
  },
  textSignin: {
    fontSize: 16,
    textAlign: 'center',
    margin: screen.height / 60,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#00B0FF',
    paddingBottom: screen.height / 60,
  },
  title: {
    height: '10%',
    paddingTop: screen.height / 55,
    textAlign: 'center',
    color: '#00B0FF',
    fontSize: 27,
    fontFamily: "sans-serif-condensed"
  },
  viewInput:{
    height: '30%',
    alignItems: 'center',
    paddingTop: screen.height / 30,
  },
  buttonBottom: {
    height: '15%',
    alignItems: 'center',
  },
  google:{
    height: '15%',
    alignItems: 'center',
    paddingTop: screen.height / 30,
  }
});

export default styles;
