import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },
  image: {
    width: 180,
    height: 160,
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
    width: 250,
    alignSelf:'center'
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#57BCFF',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: 250,
    alignSelf:'center'
  },
  cardForm: {
    width: 320,
    height:340,
    borderColor:'#57BCFF',
    borderRadius: 10,
    marginBottom:100,
  },
  viewCard: {
    marginVertical:40,
  },
  textSignin: {
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
    color: 'white'
  },
  textLogin: {
    flexDirection:'row',
    color:'#57BCFF',
    
  },
  instructions: {
    textAlign: 'center',
    color: '#00B0FF',
    marginBottom: 5,
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    marginBottom:100,
    color: '#00B0FF',
    fontSize: 27,
    fontFamily: "sans-serif-condensed"
  },
  titlePwd: {
    textAlign: 'center',
    color: '#00B0FF',
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
    marginBottom:20,
  },
});

export default styles;
