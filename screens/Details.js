import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import { DatabaseConnection } from "../database/connectdatabase";

const db = DatabaseConnection.getConnection();

const Details = ({ route }) => {
  const { TypeData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.textHeader}>Number</Text>
        <Text style={styles.textBottom}>{TypeData.Id}</Text>

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

        <Text style={styles.textHeader}>Notes</Text>
        <Text style={styles.textBottom}>{TypeData.notes}</Text>

        <Text style={styles.textHeader}>Name of the reporter</Text>
        <Text style={styles.textBottom}>{TypeData.reporter}</Text>
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
