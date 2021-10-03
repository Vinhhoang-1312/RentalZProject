import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.handlePress} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "green",

    // marginHorizontal: 10,
    // borderRadius: 15,
    // marginTop: 10,
    // height: 80,
    // width: 100,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomButton;
