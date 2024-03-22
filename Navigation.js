// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./Home";
// import Search from "./Search";
// import Ticket from "./Ticket";
// import Profile from "./Profile";
// import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
// import { createStackNavigator } from "@react-navigation/stack";
// import Payment from "./Payment";

// const AppTab = createBottomTabNavigator();
// const AppStack = createStackNavigator();

// export function Stack() {
//     return(
//         // <NavigationContainer>
//             <AppStack.Navigator>
//                 <AppStack.Screen name="Ticket" component={Ticket}/>
//                 <AppStack.Screen name="Payment" component={Payment}/>
//             </AppStack.Navigator>
//         // </NavigationContainer>
//     )
// }

function Tab () {
    return(
        <NavigationContainer>
            <AppTab.Navigator screenOptions={{
              tabBarActiveTintColor: 'darkorange',
              tabBarInactiveTintColor: 'black',
              tabBarShowLabel: false,
            }}>
              <AppTab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                  <AntDesign name="home" size={size} color={color} />
                )
              }}/>
              <AppTab.Screen name="Search" component={Search} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                  <AntDesign name="search1" size={size} color={color} />
                )
              }}/>
              <AppTab.Screen name="Ticket" component={Ticket} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                  <MaterialCommunityIcons name="ticket-confirmation-outline" size={size} color={color} />
                )
              }}/>
              <AppTab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                  <Octicons name="person" size={size} color={color} />
                )
              }}/>
            </AppTab.Navigator>
            
          </NavigationContainer> 
      )
}

export default Tab