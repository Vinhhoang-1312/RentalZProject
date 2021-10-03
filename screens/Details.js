import * as SQLite from "expo-sqlite";
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  Alert,
  StyleSheet,
  Button,
} from "react-native";

import React, { useState, useEffect } from "react";
const db = SQLite.openDatabase("dbName", 1.0);

const Details = ({ navigation }) => {
  // const [propertytype, setpropertytype] = useState("");
  // const [bedrooms, setbedrooms] = useState("");
  // const [dateandtime, setdateandtime] = useState("");
  // const [price, setprice] = useState("");
  // const [furniture, setfurniture] = useState("");
  // const [notes, setnotes] = useState("");
  // const [reporter, setreporter] = useState("");
  let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Data", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

  // // const showData = () => {
  // //   navigation.navigate("Result");
  // // };

  // const getData = () => {
  //   try {
  //     db.transaction((tx) => {
  //       console.log(11199999999);
  //       tx.executeSql("SELECT * FROM Data;", [], (tx, result) => {
  //         console.log(JSON.stringify(result.rows));
  //         var len = result.rows.length;
  //         console.log(len);
  //         if (len > 0) {
  //           const datapropertytype = result.rows.item(0).propertytype;
  //           const databedrooms = result.rows.item(0).bedrooms;
  //           const datadateandtime = result.rows.item(0).dateandtime;
  //           const dataprice = result.rows.item(0).price;
  //           const datafurniture = result.rows.item(0).furniture;
  //           const datanotes = result.rows.item(0).notes;
  //           const datareporter = result.rows.item(0).reporter;

  //           setpropertytype(datapropertytype);
  //           setbedrooms(databedrooms);
  //           setdateandtime(datadateandtime);
  //           setprice(dataprice);
  //           setfurniture(datafurniture);
  //           setnotes(datanotes);
  //           setreporter(datareporter);
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  let listItemView = (item) => {
    return (
      <View key={item.Id} style={{ backgroundColor: "white", padding: 20 }}>
        <Text>Id: {item.Id}</Text>
        <Text>Propertytype: {item.propertytype}</Text>
        <Text>Bedrooms: {item.bedrooms}</Text>
        <Text>Dateandtime: {item.dateandtime}</Text>
        <Text>Price: {item.price}</Text>
        <Text>Furniture: {item.furniture}</Text>
        <Text>Notes: {item.notes}</Text>
        <Text>Reporter: {item.reporter}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={flatListItems}
        // ItemSeparatorComponent={listViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => listItemView(item)}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     margin: 10,
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   input: {
//     width: 300,
//     borderWidth: 1,
//     borderColor: "#555",
//     borderRadius: 10,
//     backgroundColor: "#ffffff",
//     textAlign: "center",
//     fontSize: 20,
//     marginTop: 130,
//     marginBottom: 10,
//   },
// });

export default Details;
