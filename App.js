import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Home from './src/BottomTab/Home';
import Search from './src/BottomTab/Search';
import Ticket from './src/BottomTab/Ticket';
import Profile from './src/BottomTab/Profile';
import Account from './src/Stack/Account';
import EditProfile from './src/Stack/EditProfile';
import Settings from './src/Stack/Settings';
import MovieScreen from './src/Stack/MovieScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = {
    tabBarActiveTintColor: '#E3651D',
    // tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        backgroundColor: 'black',
    }
}

function TabNavigator () {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={StackNavigator} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <AntDesign name="home" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Search" component={Search} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <AntDesign name="search1" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Ticket" component={Ticket} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <Octicons name="person" size={size} color={color} />
                )
            }}/>
        </Tab.Navigator>
    )
}

function StackNavigator () {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MovieScreen" component={MovieScreen} />
        </Stack.Navigator>
    )
}

export default function App () {
    return(
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./Home";
// import Search from "./Search";
// import Ticket from "./Ticket";
// import Profile from "./Profile";
// import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return(
//     <NavigationContainer>
//         <Tab.Navigator screenOptions={{
//           tabBarActiveTintColor: 'darkorange',
//           tabBarInactiveTintColor: 'black',
//           tabBarShowLabel: false,
//         }}>
//           <Tab.Screen name="Home" component={Home} options={{
//             headerShown: false,
//             tabBarIcon: ({size, color}) => (
//               <AntDesign name="home" size={size} color={color} />
//             )
//           }}/>
//           <Tab.Screen name="Search" component={Search} options={{
//             headerShown: false,
//             tabBarIcon: ({size, color}) => (
//               <AntDesign name="search1" size={size} color={color} />
//             )
//           }}/>
//           <Tab.Screen name="Ticket" component={Ticket} options={{
//             headerShown: false,
//             tabBarIcon: ({size, color}) => (
//               <MaterialCommunityIcons name="ticket-confirmation-outline" size={size} color={color} />
//             )
//           }}/>
//           <Tab.Screen name="Profile" component={Profile} options={{
//             headerShown: false,
//             tabBarIcon: ({size, color}) => (
//               <Octicons name="person" size={size} color={color} />
//             )
//           }}/>
//         </Tab.Navigator>
        
//       </NavigationContainer>
      
//   )
// }

// export default App
