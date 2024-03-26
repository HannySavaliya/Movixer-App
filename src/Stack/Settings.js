import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

const Settings = ({ navigation }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeChange = (mode) => {
        setIsDarkMode(mode);
    };

    return(
        <View style={style.container}>

            <View style={style.headerContain}> 
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <AntDesign name="closecircle" size={24} color="darkorange" style={style.iconCancel} />
                </Pressable>
                <Text style={style.title}>Settings</Text>
            </View>

            <View style={style.themeContain}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="theme-light-dark" size={24} color="white" style={style.iconArrow} />
                </TouchableOpacity>
                <Text style={style.themes}>Themes</Text>
            </View>

            <Text style={style.line}></Text>

            <View >
                <View style={style.radio}>
                    <Text style={style.label}>Light Mode</Text>
                    <TouchableOpacity onPress={() => handleModeChange(false)} style={[style.radioButton, !isDarkMode ? style.selected : null]}>
                        { !isDarkMode && <View style={style.radioDot}></View> }
                    </TouchableOpacity>
                </View>

                <View style={style.radio}>
                    <Text style={style.label}>Dark Mode</Text>
                    <TouchableOpacity onPress={() => handleModeChange(true)} style={[style.radioButton, isDarkMode ? style.selected : null]}>
                        { isDarkMode && <View style={style.radioDot}></View> }
                    </TouchableOpacity>
                </View>
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
    headerContain: {
        flexDirection: 'row',
        marginLeft: -70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconCancel: {
        marginTop: 60,
    },
    title: {
        marginTop: 60,
        color: 'white',
        fontSize: 25,
        marginLeft: 50,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    themeContain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 90,
        marginRight: 140 
    },
    themes: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 40, 
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        height: 25,
        width: 300,
        opacity: 0.5
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 20
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white', 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 100
    },
    selected: {
        backgroundColor: '#333', 
    },
    radioDot: {
        width: 10,
        height: 10,
        borderRadius: 6,
        backgroundColor: 'white', 
    },
    label: {
        fontSize: 20,
        marginRight: 5,
        color: 'white',
    },
})


export default Settings