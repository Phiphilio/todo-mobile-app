import AsyncStorage from "@react-native-async-storage/async-storage";

type props = {
  key: string;
  value: object[];
};

export function useSetItem({ key, value }: props) {
  const storeData = async () => {
    try {
      const valueInString = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueInString);
      console.log("données sauvegardées");
    } catch (error) {
      console.log(error);
    }
  };
  return storeData();
}
