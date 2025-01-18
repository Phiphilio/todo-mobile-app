import { Image, StyleSheet, TextInput, Text, View } from "react-native";

type props = {
  text: string;
  changementText: (s: string) => void;
};

export function NoteInput({ text, changementText }: props) {
  // console.log(text);
  return (
    <View style={styles.Input}>
      <TextInput
        style={styles.TextSection}
        onChangeText={changementText}
        value={text}
        placeholder="Que noter ?"
      />
      <Image
        source={require("@/assets/images/teddybear.png")}
        style={styles.icone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "white",
    //flex: 1 / 4,
    borderRadius: 20,
    width: 300,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  TextSection: {
    //flex: 1,
    height: 42,
    width: 200,
    fontSize: 15,
    color: "black",
    //backgroundColor: "yellow",
  },
  icone: {
    marginLeft: 15,
    width: 24,
    height: 24,
    // backgroundColor: "yellow",
  },
});
