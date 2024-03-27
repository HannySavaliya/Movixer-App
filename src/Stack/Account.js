import React from "react";
import { Pressable, StyleSheet, Text, View,  TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const Account = ({ navigation }) => {
    return(
        <View style={style.container}>
            <View style={style.cancelBtn}> 
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <AntDesign name="closecircle" size={24} color="darkorange" style={style.iconCancel} />
                </Pressable>
                <Text style={style.title}>My Profile</Text>
            </View>
            <View>
               <Text style={style.profilePic}></Text>
               <Text style={style.userName}>Username</Text>
            </View>
            <View style={style.editContain}>
                <Text style={style.edit}>Edit Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <AntDesign name="right" size={24} color="white" style={style.iconArrow} />
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
    cancelBtn: {
        flexDirection: 'row',
        marginLeft: -70,
        justifyContent: 'center'
    },
    iconCancel: {
        marginTop: 68,
    },
    title: {
        marginTop: 60,
        color: 'white',
        fontSize: 25,
        marginVertical: 20,
        marginLeft: 50,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    profilePic: {
        justifyContent: 'center',
        backgroundColor: 'gray',
        height: 75,
        width: 75,
        borderRadius: 50,
        marginTop: 30,
    },
    userName: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    editContain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        height: 65,
        width: 300,
        marginTop: 40
    },
    edit: {
        color: 'white',
        fontSize: 18,
        marginLeft: 20, 
    },
    iconArrow: {
        marginLeft: 150,
    }  
})

export default Account