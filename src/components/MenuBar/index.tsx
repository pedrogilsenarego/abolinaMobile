import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/pallete";

const MenuBar = () => {
  return (
    <View style={{ backgroundColor: Colors.tealc, padding: 20 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 2,
          alignSelf: 'flex-start',
          borderWidth: 2,
          borderColor: "grey"
        }}
      >
        <Text style={{ color: "white" }}>Todos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
