import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.pay} >Payment</Text>
                <Text style={styles.text}>Cards , UPI And More...</Text>
            </View>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PayCard')}>
                <View style={styles.cardContent}>
                    <Image source={require('../../assets/cards.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.cardText}>Cards</Text>
                        <Text style={styles.cardMiniText}>Cards</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PayUPI')}>
                <View style={styles.cardContent}>
                    <Image source={require('../../assets/UPI.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.cardText}>UPI</Text>
                        <Text style={styles.cardMiniText}>UPI</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PayNetBank')}>
                <View style={styles.cardContent}>
                    <Image source={require('../../assets/net banking.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.cardText}>Net Banking</Text>
                        <Text style={styles.cardMiniText}>Net Banking</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        margin: 60,
    },
    pay: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        margin: 70,
        marginLeft: 120,
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
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardMiniText: {
        color: 'grey',
    },
});

export default Payment;
