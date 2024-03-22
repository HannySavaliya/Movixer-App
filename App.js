import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Home from './src/BottomTab/Home';
import Search from './src/BottomTab/Search';
import Ticket from './src/BottomTab/Ticket';
import Profile from './src/BottomTab/Profile';
// import Account from './src/Stack/Account';
// import EditProfile from './src/Stack/EditProfile';

import Login from './src/Stack/Login';
import Signup from './src/Stack/Signup';
import Google from './src/Stack/Google';
import MovieSeatSelect from './src/Stack/SelectTicket';
import MovieTicket from './src/Stack/ShowTicket';
import Payment from './src/Stack/Payment';
import Paycard from './src/Stack/PayCard';
import PayUPI from './src/Stack/PayUPI';
import PayNetBank from './src/Stack/PayNetBanking';
import PaySuccessfully from './src/Stack/PaySuccess';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const screenOptions = {
    tabBarActiveTintColor: '#E3651D',
    tabBarShowLabel: false,
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Google" component={Google} />
            <Stack.Screen name="SelectTicket" component={MovieSeatSelect} />
            <Stack.Screen name="MovieTicket" component={MovieTicket} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="PayCard" component={Paycard} />
            <Stack.Screen name="PayUPI" component={PayUPI} />
            <Stack.Screen name="PayNetBank" component={PayNetBank} />
            <Stack.Screen name="PaySuccess" component={PaySuccessfully} />
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