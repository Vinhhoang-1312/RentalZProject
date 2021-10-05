import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { DatabaseConnection } from "../database/connectdatabase";

const db = DatabaseConnection.getConnection();

const Details = ({ route }) => {
  const { item } = route.params;

  const deleteType = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM Database WHERE ID = ?",
          [item.ID],
          (tx, result) => {
            alert("Deleted !!!");
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.textHeader}>ID</Text>
        <Text style={styles.textBottom}>{item.id}</Text>

        <Text style={styles.textHeader}>Property type</Text>
        <Text style={styles.textBottom}>{item.propertytype}</Text>

        <Text style={styles.textHeader}>Bedrooms</Text>
        <Text style={styles.textBottom}>{item.bedrooms}</Text>

        <Text style={styles.textHeader}>Datetime</Text>
        <Text style={styles.textBottom}>{item.dateandtime}</Text>

        <Text style={styles.textHeader}>Monthly rent price</Text>
        <Text style={styles.textBottom}>{item.price}</Text>

        <Text style={styles.textHeader}>Furniture</Text>
        <Text style={styles.textBottom}>{item.furniture}</Text>

        <Text style={styles.textHeader}>Notes</Text>
        <Text style={styles.textBottom}>{item.notes}</Text>

        <Text style={styles.textHeader}>Name of the reporter</Text>
        <Text style={styles.textBottom}>{item.reporter}</Text>

        <CustomButton title="Delete" handlePress={deleteType} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listItem: {
    padding: 25,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#EEE",
  },
  textHeader: {
    color: "#111",
    fontSize: 15,
    fontWeight: "bold",
  },
  textBottom: {
    color: "#111",
    fontSize: 18,
  },
});

export default Details;
