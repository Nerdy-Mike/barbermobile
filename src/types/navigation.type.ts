import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  DashboardScreen: undefined;
  BottomNavigation: undefined;
  SpecialistDetailScreen: {
    specialistId?: string;
  };
};

export type NavigationRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
