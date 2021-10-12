import "react-native-gesture-handler";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import React, { useState, useEffect } from "react";
import { DatabaseConnection } from "../database/connectdatabase";
const db = DatabaseConnection.getConnection();

const Search = ({ navigation }) => {
  const [searchType, setSearchType] = useState("");
  const [TypeData, setTypeData] = useState([]);

  const searchPropertyType = () => {
    {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Databaserentalz where propertytype = ?",
          [searchType],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setSearchType(temp);

            if (results.rows.length >= 1) {
              setTypeData(results.rows.item(0));
            }
          }
        );
      });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, textAlign: "center", color: "#000" }}>
        Search
      </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(searchType) => setSearchType(searchType)}
        placeholder="Enter propertytype"
      />

      <TouchableOpacity
        style={[styles.touchableOpacity, { marginTop: 20 }]}
        onPress={searchPropertyType}
      >
        <Text style={styles.touchableOpacityText}> oke </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { TypeData })}
      >
        <Text style={styles.textHeader}>Property type</Text>
        <Text style={styles.textBottom}>{TypeData.propertytype}</Text>

        <Text style={styles.textHeader}>Bedrooms</Text>
        <Text style={styles.textBottom}>{TypeData.bedrooms}</Text>

        <Text style={styles.textHeader}>Datetime</Text>
        <Text style={styles.textBottom}>{TypeData.dateandtime}</Text>

        <Text style={styles.textHeader}>Monthly rent price</Text>
        <Text style={styles.textBottom}>{TypeData.price}</Text>

        <Text style={styles.textHeader}>Furniture</Text>
        <Text style={styles.textBottom}>{TypeData.furniture}</Text>

        <Text style={styles.textHeader}>Name of the reporter</Text>
        <Text style={styles.textBottom}>{TypeData.reporter}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 25,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#99CCFF",
  },
  textHeader: {
    color: "#111",
    fontSize: 18,
    fontWeight: "bold",
  },
  textBottom: {
    color: "black",
    fontSize: 16,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  touchableOpacity: {
    backgroundColor: "#0091EA",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },

  touchableOpacityText: {
    color: "#FFFFFF",
    fontSize: 23,
    textAlign: "center",
    padding: 8,
  },

  textInputStyle: {
    height: 45,
    width: "90%",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#00B8D4",
    borderRadius: 7,
    marginTop: 15,
  },

  itemsStyle: {
    fontSize: 22,
    color: "#000",
  },
});

export default Search;
