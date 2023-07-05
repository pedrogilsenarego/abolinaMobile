import LottieView from "lottie-react-native";
import * as React from "react";
import { useRef } from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { fetchDigitalBook } from "../../services/digitalBooks";
import { IDigitalBook } from "../../types/digitalBook";

const Book1 = () => {
  const animation = useRef<LottieView>(null);
  const documentID = "duasAlmas";

  const {
    isLoading: loadingBook,
    error: errorBook,
    data: bookData,
  } = useQuery<IDigitalBook, [string, string]>(
    [documentID, documentID],
    fetchDigitalBook,
    {
      staleTime: 3600 * 60,
      cacheTime: 3600 * 60,
    }
  );

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={{ marginTop: 50, fontSize: 24 }}>{bookData?.title}</Text>
      <View style={{ width: 100, height: 100, backgroundColor: "red" }}></View>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <LottieView
          source={require("./balloon-pup.json")}
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#eee",
          }}
        />
      </View>
    </View>
  );
};

export default Book1;
