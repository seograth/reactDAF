import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  StatusBar
} from "react-native";
import Slider from "./src/SliderDelay";
import audio from "./src/audio";
import * as Permissions from "expo-permissions";

export default function App() {
  const [disabled, setDisabled] = useState(true);
  const [perm, setPerm] = useState(false);
  const ref = useRef();

  useEffect(() => {
    (async () => {
      const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      setPerm(response.status === "granted");
    })();
    ref.current = audio();
  }, []);

  useEffect(() => {
    if (disabled) {
      ref.current.stop();
    } else {
      ref.current.start()
      // .then(() => ref.current.play()); 
    }
  }, [disabled]);

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === "android" ? (
        <View style={{ height: StatusBar.currentHeight }} />
      ) : null}
      <View style={styles.container}>
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Text>Connect your headphones and press Start!</Text>
          <Button
            title={disabled ? "Start" : "Stop"}
            onPress={() => setDisabled(!disabled)}
          />
          <Button
            title={disabled ? "play" : "play"}
            onPress={() => ref.current.play()}
          />
        </View>
        <View style={styles.container}>
          <Slider disabled={disabled} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
