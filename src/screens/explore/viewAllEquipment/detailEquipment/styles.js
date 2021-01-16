import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  cardStore: {
    width: 185,
    height: 230,
    borderRadius: 5,
    
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
