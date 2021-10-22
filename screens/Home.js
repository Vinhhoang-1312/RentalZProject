import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import CustomButton from "../components/CustomButton";
import { DatabaseConnection } from "../database/connectdatabase";
const db = DatabaseConnection.getConnection();

const Home = ({ navigation }) => {
  const [propertytype, setpropertytype] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [dateandtime, setdateandtime] = useState("");
  const [price, setprice] = useState("");
  const [furniture, setfurniture] = useState("");
  const [notes, setnotes] = useState("");
  const [reporter, setreporter] = useState("");

  useEffect(() => {
    createTable();
  }, []);

  const submitdata = () => {
    if (
      propertytype.length === 0 ||
      bedrooms.length === 0 ||
      dateandtime.length === 0 ||
      price.length === 0 ||
      reporter.length === 0
    ) {
      Alert.alert("Some of your information is missing !!! Please check again");
    } else {
      try {
        db.transaction((tx) => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <View>
          <Text style={styles.head}>Welcome</Text>

          <Text style={styles.text}>Property type:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setpropertytype(value)}
            value={propertytype}
          />

          <Text style={styles.text}>Bedrooms :</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(value) => setbedrooms(value)}
            value={bedrooms}
          />

          <Text style={styles.text}>Data and Time :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setdateandtime(value)}
            value={dateandtime}
          />

          <Text style={styles.text}>Monthly rent price :</Text>
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            onChangeText={(value) => setprice(value)}
            value={price.toString()}
          />

          <Text style={styles.text}>Furniture types :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setfurniture(value)}
            value={furniture}
          />

          <Text style={styles.text}>Notes :</Text>
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
            onChangeText={(value) => setnotes(value)}
            value={notes}
          />

          <Text style={styles.text}>Name of the reporter :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setreporter(value)}
            value={reporter}
          />

          <CustomButton title="submit" handlePress={submitdata} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollView: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 30,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    textAlign: "left",
    color: "black",

    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: 220,
    borderRadius: 5,
    textAlign: "center",

    fontSize: 17,
    marginBottom: 5,
    marginTop: 10,
  },
});
export default Home;
