import React, { useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const Book1 = () => {
  const animation = useRef(null);
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <View style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
        <LottieView
          source={require("../../assets/lottie/balloon-pup.json")}
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee',
          }}
        />
      </View>
    </View>
  );
};

export default Book1;
