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
    width: screen.width / 1.6,
    alignSelf: 'center'
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#57BCFF',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: screen.width / 1.6,
    alignSelf: 'center'
  },
  cardForm: {
    width: screen.width / 1.3,
    height: screen.height / 2.1,
    borderColor: '#57BCFF',
    borderRadius: 10,
  },
  viewCard: {
    marginVertical: screen.height / 20,
  },
  textSignin: {
    fontSize: 16,
    textAlign: 'center',
    margin: screen.height / 70,
    color: 'white'
  },
  textMessage: {
    fontSize: 16,
    textAlign: 'justify',
    margin: 25,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    height: '10%',
    paddingTop: screen.height / 70,
    textAlign: 'center',
    color: '#00B0FF',
    fontSize: 27,
    fontFamily: "sans-serif-condensed"
  },
  titlePwd: {
    textAlign: 'center',
    color: '#00B0FF',
    fontSize: 20,
    fontFamily: "sans-serif-condensed"
  },
  view: {
    height: '50%',
    alignItems: 'center',
    paddingTop: screen.height / 40,
  }
});

export default styles;
