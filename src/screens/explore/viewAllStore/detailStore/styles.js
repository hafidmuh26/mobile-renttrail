import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  cardStore: {
    width: 390,
    marginBottom: 0,
    alignSelf: 'center'
  },

  item: {
    paddingTop: 10,
    borderBottomWidth: 0,
    flexWrap: 'wrap'
  },
  viewCard: {
    flexWrap: 'wrap',
  },
  image: {
    width: 395,
    height: 230,
  },
  imageChoosen: {
    width: 395,
    height: 130,
  },
  thumImage: {
    width: 173,
    height: 130,
    borderRadius: 4
  },
  viewCardProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 11
  },
  cardStoreProduct: {
    width: 185,
    height: 230,
    borderRadius: 5,  
  },
});

export default styles;
