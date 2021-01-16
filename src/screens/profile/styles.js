import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  buttonSignout: {
    alignSelf:'center',
    borderRadius: 10,
    backgroundColor: '#57BCFF',
    width:'50%',
    paddingLeft:70,
    paddingRight:50,
  },
  buttonSave: {
    alignSelf:'center',
    borderRadius: 10,
    backgroundColor: '#57BCFF',
    width:'50%',
    paddingLeft:80,
    paddingRight:50,
  },
  input: {
    padding: 10,
    height: 40,
    borderColor: '#64dd17',
    marginBottom: 3

  },
});

export default styles;
