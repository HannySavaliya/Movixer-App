import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Ticket = ({ navigation }) => {
    return (
        <View style={style.container}>
            <View style={style.cancelBtn}> 
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="closecircle" size={24} color="darkorange" style={style.icon} />
                </Pressable>
                <Text style={style.title}>My Tickets</Text>
            </View>
            <View style={style.ticket}>
                <Text style={style.movieTitle}>Movie Title</Text>
                <Text style={style.infoText}>Ticket :</Text>
                <Text style={style.infoText}>Date :</Text>
                <Text style={style.infoText}>Time :</Text>
                <Text style={style.infoText}>Location :</Text>
                <Text style={style.infoText}>Seat :</Text>
                <Text style={style.infoText}>Price :</Text>
                <Pressable style={style.button} onPress={() => navigation.navigate('stack', { screen: 'Payment' })}>
                    <Text style={style.buttonText} title='Pay' color='darkorange'>Pay</Text>
                </Pressable>
            </View>

        </View>
    );
};

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
    icon: {
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
    ticket: {
        marginTop: 20,
        padding: 30,
        height : 300,
        width : 320,
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    movieTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 7,
    },
    button: {
        backgroundColor: 'darkorange',
        padding: 5,
        borderRadius: 25,
        marginTop: 10, 
        marginHorizontal: 50 ,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
});
    
export default Ticket;

