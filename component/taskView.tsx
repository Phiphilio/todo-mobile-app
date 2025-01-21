import { useState } from "react";
import { StyleSheet, View, ViewProps, Text, Pressable } from "react-native";

type props = ViewProps & {
  title: string;
  done: boolean;
};

type colory = "#4CAF50" | "#C62828";

export function TaskView({ title, done, ...rest }: props) {
  const [color, setColor] = useState<colory>("#4CAF50");

  const colorSwap = () => {
    if (done === true) {
      setColor("#4CAF50");
    } else {
      setColor("#C62828");
    }
  };
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.act}>
        <Text style={styles.text}> {title}</Text>
      </View>
      <Pressable
        onPress={colorSwap}
        style={[styles.state, { backgroundColor: color }]}
      >
        <View>
          <Text> </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    width: 300,
    height: 60,
    backgroundColor: "#D81B60",
    flexDirection: "row",
  },
  act: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",

    //backgroundColor: "green",
  },
  text: {
    fontSize: 13,
    color: "#FFFFFF",
  },
  state: {
    flex: 1 / 3,
    borderLeftWidth: 2,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: "#4CAF50",
  },
});
