import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../../../constants/pallete";

const Shelves = () => {
  return (
    <View style={{ marginHorizontal: 10, paddingTop: 30 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <View style={{ paddingVertical: 7, paddingHorizontal:10, backgroundColor: Colors.tealc, borderRadius: 20 }}>
          <Text style={{ color: "white" }}>Create a new shelf +</Text>
        </View>
      </View>
    </View>
  );
};

export default Shelves;
