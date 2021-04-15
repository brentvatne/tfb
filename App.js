import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Facebook from "expo-facebook";

async function logInAsync() {
  const result = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile"],
  });
  alert(JSON.stringify(result));
}

export default function App() {
  React.useEffect(() => {
    async function initFacebookAsync() {
      try {
        await Facebook.initializeAsync({ appId: "629712900716487" });
      } catch (e) {
        alert(e.message);
      }
    }

    initFacebookAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Sign in to Facebook" onPress={logInAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
