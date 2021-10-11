import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CustomButton from "../components/CustomButton";
import React, { useState, useEffect } from "react";
import { DatabaseConnection } from "../database/connectdatabase";

const db = DatabaseConnection.getConnection();

function Result({ route, navigation }) {
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Databaserentalz", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setItems(temp);

        if (results.rows.length >= 1) {
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      });
    });
  }, []);

  const listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  const emptyMSG = (status) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ fontSize: 25, textAlign: "center" }}>
          No Record Inserted Database is Empty...
        </Text>
      </View>
    );
  };

  const navigateToDetails = (
    propertytype,
    Id,
    bedrooms,
    dateandtime,
    price,
    furniture,
    notes,
    reporter
  ) => {
    navigation.navigate("Details", {
      Id: Id,
      propertytype: propertytype,
      bedrooms: bedrooms,
      dateandtime: dateandtime,
      price: price,
      furniture: furniture,
      notes: notes,
      reporter: reporter,
    });
  };

  return (
    <View style={styles.data}>
      {empty ? (
        emptyMSG(empty)
      ) : (
        <FlatList
          data={items}
          ItemSeparatorComponent={listViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.Id} style={{ padding: 20 }}>
              <TouchableOpacity
                onPress={() =>
                  navigateToDetails(
                    item.propertytype,
                    item.bedrooms,
                    item.dateandtime,
                    item.price,
                    item.furniture,
                    item.notes,
                    item.reporter
                  )
                }
              >
                <Text style={styles.itemsStyle}> Id: {item.Id} </Text>
                <Text style={styles.itemsStyle}>
                  {" "}
                  property: {item.propertytype}{" "}
                </Text>
                <Text style={styles.itemsStyle}>
                  {" "}
                  bedrooms: {item.bedrooms}{" "}
                </Text>
                <Text style={styles.itemsStyle}>
                  {" "}
                  datetime: {item.dateandtime}{" "}
                </Text>
                <Text style={styles.itemsStyle}>
                  {" "}
                  monthlyprice: {item.price}{" "}
                </Text>
                <Text style={styles.itemsStyle}>
                  {" "}
                  furniture: {item.furniture}{" "}
                </Text>
                <Text style={styles.itemsStyle}> note: {item.notes} </Text>

                <Text style={styles.itemsStyle}>
                  {" "}
                  namereporter: {item.reporter}{" "}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  data: {
    flex: 1,
  },

  touchableOpacity: {
    backgroundColor: "#0091EA",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
export default Result;
