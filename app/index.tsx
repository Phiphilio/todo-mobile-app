import { NoteInput } from "@/component/noteInput";
import { useAsyncStore } from "@/hooks/useAsyncStore";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [task, setTask] = useState<object[]>([]);
  const [text, onChangeText] = useState("");

  /**
   * asynchronisme de useState :
   * la modification de la valeur de task est asynchrone, c-a-d que quand j'utilise setTask,
   * la valeur de task sera modifier au prochain rendu. ça veut dire que tant qu'il n'y a pas eu de nouveau rendu,
   *  la valeur de task reste inchangé, c'est pour ça que='un console.log(task) juste après avoir utiliser setTask
   * va réafficher l'ancienne valeur de task.
   */
  //console.log("ce que contient task avant modification :", task);

  const taskAdd = () => {
    const notedTask = {
      title: text,
      done: false,
    };
    setTask([...task, notedTask]); // gâce à l'opératuer de décomposition "...", j'ajoute le tableau task, puis j'ajoute l'objet notedTask et le tout forme un nouveau tableau

    /**
     * je n'aurais pas pu utiliser array.push() pour ajouter notedTask pour 2 raisons :
     * 1) react ne permet pas de modifier directement la valeur d'une variable d'état autrement qu'avec la fonction qui y est associé (ici setTask)
     * 2) j'ai setTask s'attend à prendre un tableau contenant des objets en paramètre, malheureusement, la methode push() renvoie un nombre qui correspond
     * à la nouvelle longueur du tableau en plus d'y ajouter un élément.
     * Utiliser l'opérateur de décomposition était la meilleur option.
     */

    console.log("ce que contient task après modification :", task);

    onChangeText("");
  };

  /**
   * useEffect est un hook qui utilise un bout de code même après un rendu.
   * Il s'execute lorsque la valeur qu'il prend en deuxième paramètre subit une modification
   */
  useEffect(() => {
    useAsyncStore({ key: "todos", value: task });
  }, [task]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <NoteInput
          text={text}
          changedText={onChangeText}
          textSubmit={taskAdd}
        />
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
