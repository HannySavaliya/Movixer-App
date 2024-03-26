import React from "react";
import { Pressable, StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons'; 

const Profile = ({ navigation }) => {
    return(
        <View style={style.container}>
            <View> 
                <Text style={style.title}>My Profile</Text>
            </View>

            <Text style={style.profilePic}></Text>
            <Text style={style.userName}>Username</Text>

            <View style={style.accountContain}>
                <View>
                    <View style={style.account}>
                        <Ionicons name="person-outline" size={20} color="white"/>
                        <Text style={style.subTitle}>Account</Text>
                    </View>
                    <Text style={style.sub1}>Edit Profile</Text>
                    <Text style={style.sub2}>Change password</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="right" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={style.accountContain}>
                <View>
                    <View style={style.account}>
                        <Ionicons name="settings-outline" size={20} color="white"/>
                        <Text style={style.subTitle}>Settings</Text>
                    </View>
                    <Text style={style.sub1}>Themes</Text>
                    <Text style={style.sub2}>Permissions</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <AntDesign name="right" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        alignItems: 'center'    
    },
    title: {
        marginTop: 60,
        color: 'white',
        fontSize: 25,
        marginTop: 70,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    profilePic: {
        backgroundColor: 'gray',
        height: 75,
        width: 75,
        borderRadius: 50,
        marginTop: 50,
        textAlign: 'center'
    },
    userName: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    accountContain: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center'
    },
    account: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 140
    },
    subTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15
    },
    sub1: {
        color: 'white',
        opacity: 0.7,
        marginLeft: 35,
        marginTop: 10
    },
    sub2: {
        color: 'white',
        opacity: 0.7,
        marginLeft: 35
    },
})

export default Profile