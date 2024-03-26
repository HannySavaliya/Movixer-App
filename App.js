import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Home from './src/BottomTab/Home';
import Search from './src/BottomTab/Search';
import Ticket from './src/BottomTab/Ticket';
import Profile from './src/BottomTab/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = {
    tabBarActiveTintColor: '#E3651D',
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        backgroundColor: 'black',
    }
}

function TabNavigator () {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="HomeScreen" component={StackNavigator} options={{
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
            <Stack.Screen name="Home" component={Home} />
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

