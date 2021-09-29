import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Button, Text, TextInput, View } from "react-native";
const db = SQLite.openDatabase("dbName", 1.0);

// const db = SQLite.openDatabase(
//   {
//     name: "MainDB",
//     location: "default",
//   },
//   () => {},
//   (error) => {
//     console.log(error);
//   }
// );

const Details = ({ navigation }) => {
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

  const showData = () => {
    navigation.navigate("Result");
  };

  const getData = () => {
    try {
      db.transaction((tx) => {
        console.log(123);
        tx.executeSql(
          "SELECT propertytype,bedrooms, dateandtime,price,  furniture, notes, reporter  FROM Data;",
          [],
          (tx, result) => {
            console.log(JSON.stringify(result.rows));
            var len = result.rows.length;
            console.log(len);
            if (len > 0) {
              const propertytype = result.rows.item(0).propertytype;
              const bedrooms = result.rows.item(0).bedrooms;
              const dateandtime = result.rows.item(0).dateandtime;
              const price = result.rows.item(0).price;
              const furniture = result.rows.item(0).furniture;
              const notes = result.rows.item(0).notes;
              const reporter = result.rows.item(0).reporter;

              setpropertytype(datapropertytype);
              setbedrooms(databedrooms);
              setdateandtime(datadateandtime);
              setprice(dataprice);
              setfurniture(datafurniture);
              setnotes(datanotes);
              setreporter(datareporter);
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const getData = () => {
  //   try {
  //     db.transaction((tx) => {
  //       tx.executeSql(
  //         "SELECT propertytype,bedrooms, dateandtime,price,  furniture, notes, reporter  FROM Users",
  //         [],
  //         (tx, results) => {
  //           var len = results.rows.length;
  //           if (len > 0) {
  //             var userpropertytype = results.rows.item(0).propertytype;
  //             var userbedrooms = results.rows.item(0).bedrooms;
  //             var userdateandtime = results.rows.item(0).dateandtime;
  //             var userprice = results.rows.item(0).price;
  //             var userfurniture = results.rows.item(0).furniture;
  //             var usernotes = results.rows.item(0).notes;
  //             var userreporter = results.rows.item(0).reporter;
  //             setpropertytype(userpropertytype);
  //             setbedrooms(userbedrooms);
  //             setdateandtime(userdateandtime);
  //             setprice(userprice);
  //             setfurniture(userfurniture);
  //             setnotes(usernotes);
  //             setreporter(userreporter);
  //           }
  //         }
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const updateData = async () => {
  //   if (
  //     propertytype.length == 0 ||
  //     bedrooms.length == 0 ||
  //     dateandtime.length == 0 ||
  //     price.length == 0 ||
  //     furniture.length == 0 ||
  //     notes.length == 0 ||
  //     reporter.length == 0
  //   ) {
  //     Alert.alert("Warning!", "Please write your data.");
  //   } else {
  //     try {
  //       db.transaction((tx) => {
  //         tx.executeSql(
  //           "UPDATE Users SET propertytype = ?,bedrooms = ?, dateandtime = ?,price = ?,  furniture = ?, notes = ?, reporter = ?, ",
  //           [
  //             propertytype,
  //             bedrooms,
  //             dateandtime,
  //             price,
  //             furniture,
  //             notes,
  //             reporter,
  //           ],
  //           () => {
  //             Alert.alert("Success!", "Your data has been updated.");
  //           },
  //           (error) => {
  //             console.log(error);
  //           }
  //         );
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const removeData = async () => {
    try {
      // await AsyncStorage.clear();
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM Users",
          [],
          () => {
            navigation.navigate("Login");
          },
          (error) => {
            console.log(error);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //   ///////////////////////////////////co van de
    //   <View style={styles.body}>
    //     <Text style={[styles.text]}>
    //       Welcome{" "}
    //       {
    //         (propertytype,
    //         bedrooms,
    //         dateandtime,
    //         price,
    //         furniture,
    //         notes,
    //         reporter)
    //       }{" "}
    //       !
    //     </Text>
    //     {/* <Text style={[styles.text]}>Your age is {age}</Text> */}
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Enter your name"
    //       value={
    //         (propertytype,
    //         bedrooms,
    //         dateandtime,
    //         price,
    //         furniture,
    //         notes,
    //         reporter)
    //       }
    //       onChangeText={(value) => setName(value)}
    //     />
    //     {/* <Button title="Update" color="#ff7f00" onPressFunction={updateData} /> */}
    //     <Button title="Remove" color="#f40100" onPressFunction={removeData} />
    //   </View>

    <View style={styles.body}>
      <Text style={styles.text}>Welcome {propertytype}</Text>
      <Text style={styles.text}>Your Age: {bedrooms}</Text>
      <Text style={styles.text}>Your Age: {dateandtime}</Text>
      <Text style={styles.text}>Your Age: {price}</Text>
      <Text style={styles.text}>Your Age: {furniture}</Text>
      <Text style={styles.text}>Your Age: {notes}</Text>
      <Text style={styles.text}>Your Age: {reporter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    margin: 10,
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
export default Details;
