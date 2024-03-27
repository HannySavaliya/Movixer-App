import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MovieScreen = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={style.container}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
                    <AntDesign name="close" size={24} color="white" style={style.icon} />
                </TouchableOpacity>
                <Text style={style.movie}></Text>
                <Text style={style.movieName}>Movie Name</Text>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} color='darkorange'>Select Seats</Text>
                </TouchableOpacity>
                <Text style={style.discription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text style={style.topCast}>Top Cast</Text>
                <ScrollView horizontal>
                    <View style={style.topcastContain}>
                        <Text style={style.topCastPic}></Text>
                        <Text style={style.topCastPic}></Text>
                        <Text style={style.topCastPic}></Text>
                        <Text style={style.topCastPic}></Text>
                        <Text style={style.topCastPic}></Text>
                        <Text style={style.topCastPic}></Text>
                    </View>
                </ScrollView>
                <Text style={style.trailer}>Trailer</Text>
                <Text style={style.trailervideo}></Text>
        </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        alignItems: 'center',
        verticalAlign: 'center'
    },
    icon: {
        marginTop: 40,
        marginRight: 350,
    },
    movie: {
        height: 250,
        borderRadius: 15,
        backgroundColor: 'white',
        opacity: 0.7,
        marginTop: 20,
        paddingHorizontal: 190
    },
    movieName: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginTop: 20
    },
    button: {
        backgroundColor: '#E3651D',
        height: 40,
        width: 150,
        borderRadius: 25,
        marginTop: 20, 
    },
    buttonText: {
        fontSize: 17,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 6
    },
    discription: {
        color: 'white',
        fontSize: 13,
        textAlign: 'left',
        marginTop: 30,
        marginHorizontal: 15,
    },
    topCast: {
        color: 'white',
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 300
    },
    topCastPic: {
        height: 100,
        width: 80,
        borderRadius: 50,
        backgroundColor: 'gray',
        marginHorizontal: 8
    },
    topcastContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 10
    },
    trailer: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 310,
        marginTop: 20
    },
    trailervideo: {
        height: 170,
        paddingHorizontal: 130,
        backgroundColor: 'gray',
        marginTop: 20,
        borderRadius: 15,
        marginRight: 110,
        marginBottom: 50
    }
});
    
export default MovieScreen;

