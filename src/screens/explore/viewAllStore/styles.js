import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'grey'
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
  viewCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 11
  }


});

export default styles;
