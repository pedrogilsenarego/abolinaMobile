import { StyleSheet } from "react-native";
import { Colors } from "../constants/pallete";


export const stylesScreens = StyleSheet.create({
  shadow: {
    backgroundColor: Colors.tealc,
    left: 20,
    right: 20,
    borderRadius: 15,
    position: "absolute",
    bottom: 25,
    height: 50,
    justifyContent:"center",
    alignItems:"center",
    shadowColor: "#000000af",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.5,
    elevation: 5,
  },
  // shadow2: {
    
  //   shadowColor: "#000000af",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.35,
  //   shadowRadius: 2.5,
  //   elevation: 2,
  // },
});