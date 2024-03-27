import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Home from './src/BottomTab/Home';
import Search from './src/BottomTab/Search';
import Ticket from './src/BottomTab/Ticket';
import Profile from './src/BottomTab/Profile';
import MovieScreen from './src/Stack/MovieScreen';
import SplashScreen from './src/Stack/SplashScreen';
import Account from './src/Stack/Account';
import EditProfile from './src/Stack/EditProfile';
import Settings from './src/Stack/Settings';

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
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="MovieScreen" component={MovieScreen} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Settings" component={Settings} />
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

