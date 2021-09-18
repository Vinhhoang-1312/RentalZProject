import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const Home = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.body}>
      <Text>HOME SCREEN</Text>
      <TextInput
        style={styles.input}
        placeholder="Property type"
        // onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bedrooms"
        // onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date and Time"
        // onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Monthly rent price"
        // onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Furniture typpes"
        // onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes Feature e)"
        // onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name of the reporter"
        // onChangeText={(value) => setName(value)}
      />

      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}>
          <Button
            title="Show All"
            // handlePress={logout}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Sreach"
            // handlePress={logout}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Submit"
            // handlePress={logout}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 250,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
  },
});
