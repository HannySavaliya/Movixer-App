import { useFormik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { REGISTRATION_SCHEMA } from '../../utils/formikValidation';

const Signup = ({ navigation }) => {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: REGISTRATION_SCHEMA, 
        onSubmit: (values) =>{
            console.log(values);
        }
    });

  return (
    <View style={style.container}>
        <Text style={style.movixer}>Movixer</Text>
        <Text style={style.signup}>Signup</Text>

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

        <View style={style.signupBtn}>
            <Button title="Sign up" color="#E3651D" onPress={formik.handleSubmit} />
        </View>

        <View style={style.options}>
            <Text style={style.text}>Do you have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={style.login} >login</Text>
            </TouchableOpacity>
        </View> 
        
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        verticalAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingBottom: 300
    },
    movixer: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 65,
        color: '#E3651D'
    },
    signup: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 40,
        textAlign: 'center',
        color: 'white'
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
    remember : {
        marginTop: 8,
        flexDirection: 'row',
        color: 'white'
    },
    signupBtn: {
        marginTop: 50,
        width: '50%',
        borderRadius: 10,
        overflow: 'hidden',
        color: 'black'
    },
    options: {
        flexDirection: 'row',
    },
    text: {
        color: '#91919F',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    login: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    lineParent: {
        marginTop: 530,
        left: 64,
        width: 297,
        height: 19,
        position: "absolute",
        marginHorizontal: -35,
        color: 'white'
    },
    groupItem: {
        left: 177,
        width: 121,
        borderBlockColor: 'white',
        opacity: 0.4
    },
    groupInner: {
        width: 132,
        left: 0,
        borderBlockColor: 'white',
        opacity: 0.4
    },
    groupBorder: {
        top: 9,
        height: 1,
        borderTopWidth: 1,
        position: "absolute",
        color: 'white'
    },
    or: {
        marginTop: -2,
        marginLeft: -3.5,
        left: "50%",
        position: "absolute",
    },
    orTypo: {
        textAlign: "left",
        fontSize: 20,
        color: 'white'
    },  
    Google: {
        flexDirection: 'row',
        marginTop: 130,
        width: '80%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
    },
    signuptext1: {
        color: "white",
        marginTop: 5,
        marginLeft: 20,
        fontSize: 15
    },
    icon: {
        height: 25,
        width: 25,
    }

});
export default Signup;