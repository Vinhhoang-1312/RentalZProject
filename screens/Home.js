import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const Home = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.body}>
      <Text style={styles.head}>HOME</Text>

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
        style={{
          borderWidth: 1,
          height: 80,
          width: 220,
          borderRadius: 5,
          textAlign: "center",
          fontSize: 17,
          marginBottom: 10,
          marginTop: 10,
        }}
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
  head: {
    marginTop: 20,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
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
    height: 40,
    width: 220,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonStyle: {
    marginHorizontal: 10,
    borderRadius: 15,
    marginTop: 10,
    height: 80,
    width: 100,
  },
});
