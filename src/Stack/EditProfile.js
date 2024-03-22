import React from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useFormik } from "formik";
// import { REGISTRATION_SCHEMA } from "./utils/formikValidation";

const EditProfile = ({ navigation }) =>{

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        // validationSchema: REGISTRATION_SCHEMA, 
        onSubmit: (values) =>{
            console.log(values);
        }
    });

    return(
        <View style={style.container}>
            <View style={style.headerContain}> 
                <Pressable onPress={() => navigation.navigate('Account')}>
                    <AntDesign name="closecircle" size={24} color="darkorange" style={style.iconCancel} />
                </Pressable>
                <Text style={style.title}>Edit Profile</Text>
            </View>

            <Text style={style.profilePic}></Text>
            <Text style={style.userName}>Username</Text>

            <View style={style.inputContainer}>
                <TextInput
                    placeholder="full name"
                    placeholderTextColor={color='white'}
                    value={formik.values.fullname}
                    onChangeText={formik.handleChange('fullname')}
                    style={[style.input, formik.errors.fullname ? style.errorBorder : '']}
                />
                {formik.errors.fullname && <Text style={{color: 'red', marginLeft: 50}}>{formik.errors.fullname}</Text>}
                <TextInput
                    style={style.input}
                    placeholder="email"
                    placeholderTextColor={color='white'}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                />
                <TextInput
                    style={style.input}
                    placeholder="password"
                    placeholderTextColor={color='white'}
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                />
                <TextInput
                    style={style.input}
                    placeholder="confirm password"
                    placeholderTextColor={color='white'}
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={formik.handleChange('confirmPassword')}
                />
            </View>

            <View style={style.updateBtn}>
                <Button title="Update" color="#E3651D" onPress={formik.handleSubmit} />
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
    inputContainer: {
        width: '80%',
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        padding: 7,
        marginTop: 20,
        paddingLeft: 20,
        opacity: 0.7,
        color: 'white'
    },
    errorBorder: {
        borderColor: 'red'
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
    profilePic: {
        backgroundColor: 'gray',
        height: 75,
        width: 75,
        borderRadius: 50,
        marginTop: 50,
        alignItems: 'center'
    },
    userName: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    updateBtn: {
        marginTop: 50,
        width: '50%',
        borderRadius: 10,
        overflow: 'hidden',
        color: 'black'
    },
})

export default EditProfile