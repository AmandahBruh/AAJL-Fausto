import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00305A",
    alignItems: "center",
    justifyContent: "center",
    display:'flex',
  },

  btnContainer: {
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#4192D9",
    margin: 10,
    color:'#00305A'
  },
  button1: {
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    flexDirection:"row",
    padding: 5,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "#4192D9",
    margin: 10,
    color:'#00305A'
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: "white",
  },

  input: {
    color: "white",
    height: 50,
    width: '80%',
    margin: 12,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#4192D9",
    borderRadius:7,
  },

  widthFull: {
    width: width,
    
  },

  containerFullWidth: {
    flex: 1,
    width: '80%',
  },
  card:{
    width: '80%',
  },
  box: {
    maxWidth: 300,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eeeee4",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  imgRedonda: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px",
  },
});

export default styles;
