import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PayNetBank = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                <AntDesign name="arrowleft" color="white" size={25} style={styles.backArrow} />
            </TouchableOpacity>

            <Text style={styles.pay} >Payment</Text>
            <Text style={styles.text}>Pay Using UPI ID</Text>

            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={require('../../assets/net banking.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.cardText}>Net Banking</Text>
                        <Text style={styles.cardMiniText}>Net Banking</Text>
                    </View>

                </View>
                <TextInput
                    style={styles.id}
                    placeholder="Enter your Net Banking ID"
                    placeholderTextColor="grey"
                />
                <View style={styles.groupItem} />

            </View>
            <View  style={styles.center}>
            <Text style={styles.price}>$</Text>
                <TouchableOpacity  style={styles.Paynow}  onPress={() => navigation.navigate('PaySuccess')}>
                   <Text style={styles.payText}>Pay Now</Text>
                   
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    backArrow: {
        marginTop: 30
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    pay: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    text: {
        color: 'grey',
        marginLeft: 35,
        fontSize: 20,
        marginBottom: 20

    },
    card: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        marginBottom: 20,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    cardText: {
        marginTop: 5,
        marginLeft: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardMiniText: {
        color: 'grey',
        marginLeft: 10,
    },
    id: {
        color: 'white',
        margin: 20,
        marginLeft: 45,
        marginBottom: -25
    },
    groupItem: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        opacity: 0.4,
        margin: 30,
        marginLeft: 40,
        marginBottom: 20
    },
    Paynow: {
        marginTop : -37,
        width: '40%',
        height : '65%',
        borderRadius: 20,
        backgroundColor : '#E3651D',
        marginLeft : 210
        
    },
    payText : {
        color : 'white',
        textAlign : 'center',
        margin : 9
    },
    center : {
        borderWidth : 2,
        borderColor : 'white',
        marginRight : 5,
        marginTop : 320,
        width : 370,
        height : 60,
        borderRadius : 15   

    },
    price : {
        color :'white',
        fontSize :30,
        fontWeight :'bold',
        marginLeft : 20,
        marginTop : 7
        
    }
})

export default PayNetBank