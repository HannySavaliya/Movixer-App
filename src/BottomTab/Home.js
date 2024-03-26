import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const [search, setSearch] = useState('');

    return (
        <View style={style.bg}>

            <View style={style.search}>
                <TextInput
                    style={style.input}
                    onChangeText={text => setSearch(text)}
                    value={search}
                    placeholder="Search your movies..."
                    placeholderTextColor="white"
                />
                <AntDesign name="search1" size={24} color="darkorange" style={style.icon} />
            </View>

            {/* Now Playing */}
            <ScrollView>
                <Text style={style.nowPlaying}>Now Playing</Text>
                <ScrollView horizontal>
                    <View style={style.boxcontain}>
                        <TouchableOpacity onPress={() => navigation.navigate('MovieScreen')}>
                            <Text style={style.box}></Text>
                            <Text style={style.rate}>Rate</Text>
                            <Text style={style.title}>Movie Name</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={style.box}></Text>
                            <Text style={style.rate}>Rate</Text>
                            <Text style={style.title}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box}></Text>
                            <Text style={style.rate}>Rate</Text>
                            <Text style={style.title}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box}></Text>
                            <Text style={style.rate}>Rate</Text>
                            <Text style={style.title}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box}></Text>
                            <Text style={style.rate}>Rate</Text>
                            <Text style={style.title}>Movie Name</Text>
                        </View>
                    </View>
                </ScrollView> 

                <View>
                    <Text style={style.popular}>Popular</Text>
                </View> 

                {/* Popular */}
                <ScrollView horizontal>
                    <View style={style.boxcontain}>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={style.popularMoviename}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={style.popularMoviename}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={style.popularMoviename}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={style.popularMoviename}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={style.popularMoviename}>Movie Name</Text>
                        </View>
                    </View>
                </ScrollView>

                <View>
                    <Text style={style.upcoming}>Upcoming</Text>
                </View> 

                {/* Up Coming */}
                <ScrollView horizontal>
                    <View style={style.boxcontain}>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={style.upcomingMoviename}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={{color : 'white' , fontSize : 18 , fontWeight : 'bold' , textAlign: 'center', marginBottom : 20 }}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={{color : 'white' , fontSize : 18 , fontWeight : 'bold' , textAlign: 'center' , marginBottom : 20}}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={{color : 'white' , fontSize : 18 , fontWeight : 'bold' , textAlign: 'center', marginBottom : 20 }}>Movie Name</Text>
                        </View>
                        <View>
                            <Text style={style.box1}></Text>
                            <Text style={{color : 'white' , fontSize : 18 , fontWeight : 'bold' , textAlign: 'center' , marginBottom : 20}}>Movie Name</Text>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>

        </View>
       

       
    );
};

const style = StyleSheet.create({
    bg: {
        height: '100%',
        backgroundColor: 'black'
    },
    box: {
        marginTop: 20,
        backgroundColor: 'white',
        opacity: 0.3,
        height: 285,
        marginHorizontal: 10,
        width: 225,
        borderRadius: 10
    },
    nowPlaying: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginLeft: 20
    },
    popular: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20 , 
        marginTop : 30 , 
        marginLeft:20
    },
    upcoming: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20 , 
        marginTop : 30 , 
        marginLeft:20
    },
    box1: {
        marginTop: 20,
        backgroundColor: 'white',
        opacity: 0.3,
        height: 240,
        marginHorizontal: 10,
        width: 180,
        borderRadius: 20
    },
    popularMoviename: {
        color : 'white' , 
        fontSize : 18 , 
        fontWeight : 'bold' , 
        textAlign: 'center'
    },
    upcomingMoviename: {
        color : 'white' , 
        fontSize : 18 , 
        fontWeight : 'bold' , 
        textAlign: 'center' , 
        marginBottom : 20
    },
    boxcontain: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginLeft: 15
    },
    rate: {
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17
    },
    title : {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight : 'bold'
    },
    container: {
        padding: 25,
        borderRadius: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: 'black',
    },
    icon: {
        marginTop: 10
    },
    input: {
        flex: 1,
        height: 40,
        color: 'white',
        marginLeft: 10
    },
    search: {
        width: '90%',
        height: 45,
        color: 'white',
        borderColor: 'white',
        opacity: 0.5,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 13,
        marginVertical: 30,
        marginTop: 60,
        marginLeft: 20,
        flexDirection: 'row',
    },
});

export default Home;

