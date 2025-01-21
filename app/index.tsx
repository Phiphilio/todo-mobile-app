import { NoteInput } from "@/component/noteInput";
import { TaskView } from "@/component/taskView";
import { useGetItem } from "@/hooks/useGetItem";
import { useSetItem } from "@/hooks/useSetItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

type taskObject = {
  id: number;
  title: string;
  done: boolean;
};

export default function Index() {
  const [task, setTask] = useState<taskObject[]>([]);
  const [stockedTask, setStockedTask] = useState<taskObject[]>([]);
  const [text, onChangeText] = useState("");

  /**
   * asynchronisme de useState :
   * la modification de la valeur de task est asynchrone, c-a-d que quand j'utilise setTask,
   * la valeur de task sera modifier au prochain rendu. ça veut dire que tant qu'il n'y a pas eu de nouveau rendu,
   *  la valeur de task reste inchangé, c'est pour ça que='un console.log(task) juste après avoir utiliser setTask
   * va réafficher l'ancienne valeur de task.
   */
  //console.log("ce que contient task avant modification :", task);

  // création d'un id basé sur la date :
  const generateId = Date.now();

  const taskAdd = () => {
    const notedTask: taskObject = {
      id: generateId,
      title: text,
      done: false,
    };
    setTask([...stockedTask, notedTask]); // gâce à l'opératuer de décomposition "...", j'ajoute le tableau task, puis j'ajoute l'objet notedTask et le tout forme un nouveau tableau

    /**
     * je n'aurais pas pu utiliser array.push() pour ajouter notedTask pour 2 raisons:
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
    // au démarrge de l'application, useState<taskObject[]>([]) initialise task avec un tableau vide ce qui fait que useEffect se lance
    if (task.length > 0) {
      useSetItem({ key: "todos", value: task });
    }
  }, [task]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await useGetItem({ key: "todos" }); // Attente de la promesse
      /**Si je ne mets pas await devant la fonction useGetItem je recevrais uniquement la promesse et pas le résultat */
      console.log("dans la mémoire il y a :", data); // Affiche la donnée une fois récupérer
      setStockedTask(data);
    };
    fetchData(); // Appel de la fonction asynchrone
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <NoteInput
          text={text}
          changedText={onChangeText}
          textSubmit={taskAdd}
        />
      </View>
      <View style={styles.taskContainer}>
        <TaskView title={stockedTask[0]?.title} done={stockedTask[0]?.done} />
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

  taskContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
});

// https://convertingcolors.com/hex-color-FF00AA.html?search=Hex(00FF00AA)
