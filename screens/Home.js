import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, Button, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
const db = SQLite.openDatabase("dbName", 1.0);

const Home = ({ navigation }) => {
  const [propertytype, setpropertytype] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [dateandtime, setdateandtime] = useState("");
  const [price, setprice] = useState("");
  const [furniture, setfurniture] = useState("");
  const [notes, setnotes] = useState("");
  const [reporter, setreporter] = useState("");

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Data'",

        [],
        function (tx, res) {
          console.log("item:", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS Data", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS Data(ID INTEGER PRIMARY KEY AUTOINCREMENT,propertytype TEXT,bedrooms INTEGER ,dateandtime DATETIME, price INTEGER ,furniture TEXT , notes TEXT, reporter TEXT )",
              []
            );
          }
        }
      );
    });
  }, []);

  // useEffect(() => {
  //   createTable();
  //   getData();
  // }, []);

  // const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS " +
  //         "Data " +
  //         "(ID INTEGER PRIMARY KEY AUTOINCREMENT,propertytype TEXT,bedrooms INTEGER ,dateandtime DATETIME, price INTEGER ,furniture TEXT , notes TEXT, reporter TEXT);"
  //     );
  //   });
  // };
  // const getData = () => {
  //   try {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         "SELECT propertytype,bedrooms, dateandtime,price,  furniture, notes, reporter  FROM Data",
  //         [],
  //         (tx, results) => {
  //           var len = results.rows.length;
  //           if (len > 0) {
  //             navigation.navigate("Details");
  //           }
  //         }
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const home = () => {
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
      Alert.alert("Warning !!!. Please enter your data!!!");
    } else {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "INSERT INTO Data (propertytype, bedrooms,dateandtime,price,furniture,notes,reporter) VALUES (?,?,?,?,?,?,?);",

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
              console.log(results.rowsAffected);
            }
          );
        });
        navigation.navigate("Details");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.head}>HOME</Text>

      {/* <TextInput
        multiline
        style={styles.input}
        placeholder="Property type *"
        onChangeText={(value) => setpropertytype(value)}
        value={propertytype}
      ></TextInput> */}
      <TextInput
        style={styles.input}
        placeholder="Property type "
        onChangeText={(value) => setpropertytype(value)}
        value={propertytype}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Bedrooms"
        onChangeText={(value) => setbedrooms(value)}
        value={bedrooms}
      />
      <TextInput
        style={styles.input}
        placeholder="Date and Time"
        onChangeText={(value) => setdateandtime(value)}
        value={dateandtime}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Monthly rent price"
        onChangeText={(value) => setprice(value)}
        value={price}
      />
      <TextInput
        style={styles.input}
        placeholder="Furniture types"
        onChangeText={(value) => setfurniture(value)}
        value={furniture}
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
        onChangeText={(value) => setnotes(value)}
        value={notes}
      />
      <TextInput
        style={styles.input}
        placeholder="Name of the reporter"
        onChangeText={(value) => setreporter(value)}
        value={reporter}
      />

      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}>
          <Button
            title="Show All"
            // handlePress={}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Sreach"
            // handlePress={}
          />
        </View>

        <CustomButton title="submit" handlePress={home} />
      </View>
    </View>
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
