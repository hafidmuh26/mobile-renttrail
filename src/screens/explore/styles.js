import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  buttonSearch: {
    marginTop: 7,
    borderRadius: 15,
    paddingLeft: 20,
    height: 43,
    color:'blue',

  },
  cardMount: {
    width: 375,
    height: 150,
    borderRadius: 8,
    alignSelf: 'center'
  },
  cardStore: {
    width: 180,
    height: 230,
    borderRadius: 5,
    alignSelf: 'center'
  },

  item: {
    paddingTop: 13,
    borderBottomWidth: 0,
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10
  },
  titleSub: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 0,
    color: 'grey'
  }

});

export default styles;
