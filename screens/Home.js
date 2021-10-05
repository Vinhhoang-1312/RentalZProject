import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, Button, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";
const db = SQLite.openDatabase("dbName", 1.0);

const Home = ({ navigation }) => {
  const [propertytype, setpropertytype] = useState("");
  console.log(propertytype, "propertytype");
  const [bedrooms, setbedrooms] = useState("");
  const [dateandtime, setdateandtime] = useState("");
  const [price, setprice] = useState("");
  const [furniture, setfurniture] = useState("");
  const [notes, setnotes] = useState("");
  const [reporter, setreporter] = useState("");
  useEffect(() => {
    createTable();
    // getData();
  }, []);
  // const getData = () => {
  //   /* AsyncStorage */
  //   // try {
  //   //   const value = await AsyncStorage.getItem("Username");
  //   //   if (value !== null) {
  //   //     navigation.navigate("Home");
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  //   /* SQLite */
  //   try {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         "SELECT (propertytype, bedrooms,dateandtime,price,furniture,notes,reporter FROM Data",
  //         [],
  //         (tx, result) => {
  //           var len = result.rows.length;
  //           if (len > 0) {
  //             navigation.navigate("Result");
  //           }
  //         }
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getData = () => {
  //   try {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         "SELECT name FROM sqlite_master WHERE type='table' AND name='Data'",
  //         [],
  //         (tx, result) => {
  //           var len = result.rows.length;
  //           if (len > 0) {
  //             navigation.navigate("Home");
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
          // tx.executeSql("DROP TABLE IF EXISTS Data", []);
          tx.executeSql(
            "INSERT INTO Data(propertytype, bedrooms,dateandtime,price,furniture,notes,reporter) VALUES (?,?,?,?,?,?,?);",

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
                Alert.alert("Data Inserted Successfully....");
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
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Data(ID INTEGER PRIMARY KEY AUTOINCREMENT,propertytype VARCHAR(15),bedrooms VARCHAR(15) ,dateandtime VARCHAR(15), price VARCHAR(15) ,furniture VARCHAR(15) , notes VARCHAR(15), reporter VARCHAR(15));"
      );
    });
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
        // keyboardType="numeric"
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
        // keyboardType="numeric"
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
