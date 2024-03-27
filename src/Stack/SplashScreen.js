import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Movixer</Text>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center', 
        width: "100%",
        height: "100%"
    },
    text:{
        fontSize: 40,
        color: "#E3651D",
        fontWeight: '900',
    }
});
