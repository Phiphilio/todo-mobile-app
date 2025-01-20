import { StyleSheet, View, ViewProps, Text } from "react-native";

type props = ViewProps & {
  title: string;
  done: boolean;
};

export function TaskView({ title, done, ...rest }: props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.act}>
        <Text style={styles.text}> {title}</Text>
      </View>
      <View style={styles.state}>
        <Text> {done}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    width: 300,
    height: 60,
    backgroundColor: "#A2005D",
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
