import React, { useState } from "react";
import { StyleSheet, Text, View, Slider } from "react-native";

export default ({ disabled }) => {
  const [delay, setDelay] = useState(200);
  return (
    <>
      <Slider
        style={{ width: 200, height: 40 }}
        value={delay}
        minimumValue={150}
        maximumValue={250}
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#000"
        step={1}
        disabled={disabled}
        onValueChange={setDelay}
      />
      <Text>{delay} ms</Text>
    </>
  );
};
