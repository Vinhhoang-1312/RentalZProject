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
    width: 90,
    height: 40,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomButton;
