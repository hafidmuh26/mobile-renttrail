import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  cardStore: {
    width: 390,
    height: 270,
    marginBottom: 1,
    alignSelf: 'center'
  },
  cardStoreImage: {
    width: 390,
    height: 650,
    marginBottom: 1,
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
    width: 390,
    height: 200,
  },
  thumImage: {
    width: 173,
    height: 130,
    borderRadius: 4
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#43a047',
    height: 25,
    width:"23%",
    

  }
});

export default styles;
