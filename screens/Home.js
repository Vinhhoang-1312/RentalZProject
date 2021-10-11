import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  View,
} from "react-native";

import CustomButton from "../components/CustomButton";
import { DatabaseConnection } from "../database/connectdatabase";
const db = DatabaseConnection.getConnection();

const Home = ({ navigation }) => {
  const [propertytype, setpropertytype] = useState("");
  // console.log(propertytype, "propertytype");
  const [bedrooms, setbedrooms] = useState("");
  const [dateandtime, setdateandtime] = useState("");
  const [price, setprice] = useState("");
  const [furniture, setfurniture] = useState("");
  const [notes, setnotes] = useState("");
  const [reporter, setreporter] = useState("");

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  useEffect(() => {
    createTable();
    // getDatabase();
  }, []);

  const submitdata = () => {
    if (
      propertytype.length === 0
      //  ||
      // bedrooms.length === 0 ||
      // dateandtime.length === 0 ||
      // price.length === 0 ||
      // furniture.length === 0 ||
      // notes.length === 0 ||
      // reporter.length === 0
    ) {
      Alert.alert("Warning !!!. Please enter your Database!!!");
    } else {
      try {
        db.transaction((tx) => {
          // tx.executeSql("DROP TABLE IF EXISTS Database", []);
          tx.executeSql(
            "INSERT INTO Databaserentalz(propertytype, bedrooms,dateandtime,price,furniture,notes,reporter) VALUES (?,?,?,?,?,?,?);",

            [
              propertytype,
              bedrooms,
              dateandtime,
              price,
              furniture,
              notes,
              reporter,
            ],
            (tx, results) => {
              console.log("Results", results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert("Database Inserted Successfully....");
              } else Alert.alert("Failed....");
            }
          );
        });
        navigation.navigate("Result");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const createTable = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Databaserentalz'",
        [],
        function (tx, res) {
          console.log("item:", res.rows.length);
          if (res.rows.length == 0) {
            tx.executeSql("DROP TABLE IF EXISTS Databaserentalz", []);
            tx.executeSql(
              "CREATE TABLE IF NOT EXISTS Databaserentalz(Id INTEGER PRIMARY KEY AUTOINCREMENT,propertytype VARCHAR(255),bedrooms VARCHAR(255) ,dateandtime datetime, price INT(11),furniture VARCHAR(255) , notes VARCHAR(255), reporter VARCHAR(255));"
            );
          }
        }
      );
    });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
    >
      <Text style={styles.head}>Welcome</Text>
      <Text>Property type:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setpropertytype(value)}
        value={propertytype}
      />
      <Text>Bedrooms :</Text>

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(value) => setbedrooms(value)}
        value={bedrooms}
      />
      <Text>Data and Time :</Text>

      <TextInput
        style={styles.input}
        onChangeText={(value) => setdateandtime(value)}
        value={dateandtime}
      />
      <Text>Monthly rent price :</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        // placeholder="Monthly rent price"
        onChangeText={(value) => setprice(value)}
        value={price}
      />
      <Text>Furniture types :</Text>

      <TextInput
        style={styles.input}
        // placeholder="Furniture types"
        onChangeText={(value) => setfurniture(value)}
        value={furniture}
      />
      <Text>Notes Feature :</Text>

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
        // placeholder="Notes Feature e)"
        onChangeText={(value) => setnotes(value)}
        value={notes}
      />
      <Text>Name of the reporter :</Text>

      <TextInput
        style={styles.input}
        // placeholder="Name of the reporter"
        onChangeText={(value) => setreporter(value)}
        value={reporter}
      />

      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}></View>

        <CustomButton title="submit" handlePress={submitdata} />
      </View>
    </ScrollView>
  );
};

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
  scrollView: {
    padding: 30,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "white",
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
});
export default Home;
