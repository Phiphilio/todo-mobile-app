import { NoteInput } from "@/component/noteInput";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <NoteInput text={text} changementText={onChangeText} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#A2005D",
    //flex: 1 / 7,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});

// https://convertingcolors.com/hex-color-FF00AA.html?search=Hex(00FF00AA)
