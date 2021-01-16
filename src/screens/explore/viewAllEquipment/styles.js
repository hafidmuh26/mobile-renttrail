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
  items: {
    backgroundColor: "#fff",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    height: 80
  },
  iconHome: {
    backgroundColor: "#64dd17",
    borderRadius: 15,
  }


});

export default styles;
