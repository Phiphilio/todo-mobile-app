import AsyncStorage from "@react-native-async-storage/async-storage";

type props = {
  key: string;
};

export function useGetItem({ key }: props) {
  const getData = async () => {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result !== null) {
        return JSON.parse(result);
      } else if (result === null) {
        console.log("il n'y a rien dans la mémoire et r =", result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return getData();
}
