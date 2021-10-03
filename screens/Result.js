import * as SQLite from "expo-sqlite";

import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Button, Text, TextInput, View } from "react-native";

const db = SQLite.openDatabase("dbName", 1.0);

const Result = ({ navigation }) => {
  const [propertytype, setpropertytype] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [dateandtime, setdateandtime] = useState("");
  const [price, setprice] = useState("");
  const [furniture, setfurniture] = useState("");
  const [notes, setnotes] = useState("");
  const [reporter, setreporter] = useState("");

  useEffect(() => {
    getData();
  }, []);

  // const showData = () => {
  //   navigation.navigate("Result");
  // };

  const getData = () => {
    try {
      db.transaction((tx) => {
        console.log(11111);
        tx.executeSql("SELECT * FROM Data;", [], (tx, result) => {
          console.log(JSON.stringify(result.rows));
          var len = result.rows.length;
          console.log(len);
          if (len > 0) {
            const datapropertytype = result.rows.item(0).Propertytype;
            const databedrooms = result.rows.item(0).Bedrooms;
            const datadateandtime = result.rows.item(0).Dateandtime;
            const dataprice = result.rows.item(0).Price;
            const datafurniture = result.rows.item(0).Furniture;
            const datanotes = result.rows.item(0).Notes;
            const datareporter = result.rows.item(0).Reporter;

            setpropertytype(datapropertytype);
            setbedrooms(databedrooms);
            setdateandtime(datadateandtime);
            setprice(dataprice);
            setfurniture(datafurniture);
            setnotes(datanotes);
            setreporter(datareporter);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Your propertytype: {propertytype}</Text>
      <Text style={styles.text}>Your bedrooms: {bedrooms}</Text>
      <Text style={styles.text}>Your dateandtime: {dateandtime}</Text>
      <Text style={styles.text}>Your price: {price}</Text>
      <Text style={styles.text}>Your furniture: {furniture}</Text>
      <Text style={styles.text}>Your notes: {notes}</Text>
      <Text style={styles.text}>Your reporter: {reporter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
export default Result;
