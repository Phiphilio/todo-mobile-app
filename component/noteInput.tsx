import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
} from "react-native";

type props = {
  text: string;
  changedText: (s: string) => void;
  textSubmit: () => void;
};

export function NoteInput({ text, changedText, textSubmit }: props) {
  return (
    <View style={styles.Input}>
      <TextInput
        style={styles.TextSection}
        onChangeText={changedText}
        value={text}
        placeholder="Que noter ?"
      />
      <Pressable
        onPress={textSubmit}
        android_ripple={{ color: "#A2005D", foreground: true, radius: 1 }}
      >
        <Image
          source={require("@/assets/images/teddybear.png")}
          style={styles.icone}
        />
      </Pressable>
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
    //note
  },
});
