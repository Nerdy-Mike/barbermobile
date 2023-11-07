import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  DashboardScreen: undefined;
  BottomNavigation: undefined;
};

export type NavigationRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
