import { NavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation.type";

export default class NavigationService {
  static navigator: NavigationContainerRef<RootStackParamList>;
  static setContainer = (
    navigation: NavigationContainerRef<RootStackParamList>,
  ) => {
    this.navigator = navigation;
  };

  static getContainer = () => {
    return this.navigator;
  };
}
