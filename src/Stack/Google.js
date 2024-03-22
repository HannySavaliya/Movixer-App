import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import google from "../../assets/google.png";
import { AntDesign } from '@expo/vector-icons';

const Google = ({ navigation }) => {
    return (
        <View style={style.container}>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <AntDesign name="arrowleft" color="black" size={25} style={style.backArrow} />
            </TouchableOpacity>

            <View style={style.bg}></View>

                <TouchableOpacity style={style.google}>
                    <Image style={style.googleIcon} source={google} />
                    <Text style={style.signuptext1}>Continue With Google</Text>
                </TouchableOpacity> 
            
                <Text style={style.line}></Text>

                <Text style={style.heading}>Movixer</Text>
                <Text style={style.account}>Choose an Account</Text>
                <Text style={style.Movixer}>to continue to Movixer</Text>

                <View style={style.profile}>
                    <Text style={style.userPic}></Text>
                    <View style={style.userDetail}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 2}}>Username</Text>
                        <Text>email</Text>
                    </View>
                </View>
                <Text style={style.line2}></Text>

                <View style={style.tryAnother}>
                    <Text style={style.userPic}></Text>
                    <View style={style.userDetail2}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 7}}>Use another account</Text>
                    </View>
                </View>
                <Text style={style.line2}></Text>

                <Text style={style.para}>
                    To continue, Google will share your name, email address, language
                    preference, and profile picture with Movixer. Before using this app,
                    you can review Movixer Privacy Policy and termas or services.
                </Text>
        </View>
    )
}
const style = StyleSheet.create({
    container :{
        verticalAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backArrow: {
        marginTop: 60,
        marginRight: 330
    },
    bg:{
        backgroundColor: 'black',
        opacity: 0.2,
        height: 510,
        width: '90%',
        marginTop: 80,
        borderRadius: 15,
    },
    google: {
        flexDirection: 'row',
        borderRadius: 10,
        // justifyContent: "center",
        marginTop: -495,
        borderColor: 'black',
        marginRight: 100,
        alignItems: 'center'
    },
    googleIcon: {
        width: 25,
        height: 25,
        marginRight : -40
    },
    signuptext1: {
        fontSize: 16,
        opacity: 0.5,
        color: "black",
        fontWeight: 'bold',
        marginLeft: 50,
    },
    line: {
        marginTop: 10,
        borderBottomColor: 'black',
        borderTopWidth: 1,
        paddingHorizontal: 185
    },
    heading : {
        fontSize : 35,
        fontWeight : 'bold',
        textAlign: 'center',
        color: '#E3651D',
        marginTop: 10
    },
    account : {
        fontSize : 20,
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold'
    },
    Movixer : {
        fontSize : 15,
        textAlign: 'center',
        marginTop: 10
    },
    profile: {
        flexDirection: 'row',
        marginTop: 40
    },
    userPic: {
        width: 30,
        height: 30,
        backgroundColor: 'black',
        borderRadius: 20,
        marginRight: 150,
        opacity: 0.5
    },
    userDetail: {
        marginRight: 120 ,
        marginLeft: -135
    },
    line2: {
        marginTop: 10,
        borderBottomColor: 'black',
        borderTopWidth: 1,
        paddingHorizontal: 130
    },
    tryAnother: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: -75
    },
    userDetail2: {
        marginRight: 120 ,
        marginLeft: -135
    },
    para: {
            marginHorizontal: 50,
            marginTop: 20
    }
})

export default Google;
