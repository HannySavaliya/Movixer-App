import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Ticket = ({ navigation }) => {
    return (
        <View style={style.container}>
            {/* <View style={style.ticket}> */}
            <View style={style.cancelBtn}> 
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="closecircle" size={24} color="#E3651D" style={style.icon} />
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
                <View style={style.break}>
                    <Text style={style.round}></Text>
                    <Text style={style.line}>----------------------------------</Text>
                    <Text style={style.round}></Text>
                </View>
                <View style={style.price}>
                    <Text style={style.priceText}>Price</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                        <Text style={style.buttonText}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </View> */}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        alignItems: 'center' ,
        justifyContent: 'center' 
    },
    cancelBtn: {
        flexDirection: 'row',
        marginLeft: -70,
        marginTop: -300
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
        backgroundColor: '#E3651D',
        marginTop: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: 350,
        borderWidth: 1,
    },
    movieTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 7,
    },
    priceText: {
        color: 'white',
        fontSize: 23,
    },
    break: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -78,
        marginTop: 30
    },
    line: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    round: {
        width: 80,
        height: 80,
        backgroundColor: 'black',
        borderRadius: 50
    },
    price: {
        flexDirection: 'row' ,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
        opacity: 0.8,
        padding: 7,
        paddingHorizontal: 60,
        borderRadius: 20
    },
});
    
export default Ticket;

