import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavBar from "./bottom-nav.routes";

import DashboardScreen from "../pages/DashboardScreen";
// import CreateAppointment from '../pages/CreateAppointment';
// import AppointmentCreated from '../pages/AppointmentCreated';

// import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "#051A38",
      },
    }}>
    <App.Screen name="BottomNavBar" component={BottomNavBar} />
    {/* <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} /> */}
  </App.Navigator>
);

export default AppRoutes;
