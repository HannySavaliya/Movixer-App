// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
// import { useFormik } from 'formik';
// import ShowImg from '../../assets/show.png';
// import HideImg from '../../assets/eye.png';

// const Login = ({ navigation }) => {
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         onSubmit: (values) => {
//             console.log(values);
//         }
//     });

//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.movixer}>Movixer</Text>
//             <Text style={styles.login}>Login</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Email"
//                     placeholderTextColor="white"
//                     value={formik.values.email}
//                     onChangeText={formik.handleChange('email')}
//                 />
//                 <View style={styles.passwordContainer}>
//                     <TextInput
//                         style={styles.passwordInput}
//                         placeholder="Password"
//                         placeholderTextColor="white"
//                         secureTextEntry={!showPassword}
//                         value={formik.values.password}
//                         onChangeText={formik.handleChange('password')}
//                     />
//                     <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                         <Image source={showPassword ? ShowImg : HideImg} style={styles.showHideIcon} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.remember}>
//                 <TouchableOpacity>
//                     <Text style={{ marginRight: 100, color: 'white' }}>Remember me</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={{ color: 'white' }}>Forgot password?</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.loginBtn}>
//                 <Button title="Login" color="#E3651D" onPress={formik.handleSubmit} />
//             </View>
//             <View style={styles.options}>
//                 <Text style={styles.text}>Don't have an account?</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//                     <Text style={styles.signup}>Sign up</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.lineParent}>
//                 <View style={styles.groupItem} />
//                 <Text style={styles.or}>or</Text>
//                 <View style={styles.groupItem1} />
//             </View>
//             <TouchableOpacity onPress={() => navigation.navigate('Google')}>
//                 <View style={styles.Google}>
//                     <Image
//                         style={styles.icon}
//                         source={require("../../assets/google.png")}
//                     />
//                     <Text style={styles.signuptext1}>Continue With Google</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black',
//         alignItems: 'center',
//         paddingTop: 100,
//     },
//     movixer: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         color: '#E3651D',
//         marginBottom: 20,
//         marginTop: 80
//     },
//     login: {
//         fontSize: 36,
//         fontWeight: 'bold',
//         color: 'white',
//         marginBottom: 20,
//     },
//     inputContainer: {
//         width: '80%',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'white',
//         borderRadius: 4,
//         padding: 10,
//         marginBottom: 20,
//         color: 'white',
//     },
//     passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     passwordInput: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: 'white',
//         borderRadius: 4,
//         height: 50,
//         marginBottom: 10,
//         color: 'white',
//         paddingLeft: 10
//     },
//     showHideIcon: {
//         width: 20,
//         height: 20,
//         tintColor: 'white',
//         marginLeft: -40,
//         marginBottom: 10
//     },
//     remember: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
//     loginBtn: {
//         marginTop: 10,
//         width: '50%',
//         borderRadius: 10,
//         overflow: 'hidden',
//         color: 'black'
//     },
//     options: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
//     text: {
//         color: '#91919F',
//         fontSize: 15,
//         fontWeight: 'bold',
//         marginRight: 10,
//         marginTop: 20,
//     },
//     signup: {
//         fontWeight: 'bold',
//         color: 'white',
//         marginTop: 20,
//     },
//     lineParent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     groupItem: {
//         flex: 1,
//         borderBottomWidth: 1,
//         borderColor: 'white',
//         opacity: 0.4,
//         marginLeft: 50
//     },
//     groupItem1: {
//         flex: 1,
//         borderBottomWidth: 1,
//         borderColor: 'white',
//         opacity: 0.4,
//         marginRight: 50
//     },
//     or: {
//         color: 'white',
//         paddingHorizontal: 10,
//     },
//     Google: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 5,
//     },
//     signuptext1: {
//         color: "white",
//         fontSize: 20,
//         marginTop: 5,
//         marginLeft: 18,
//     },
//     icon: {
//         width: 25,
//         height: 25,
//     },
// });

// export default Login;


import { useFormik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import ShowImg from '../../assets/show.png';
import HideImg from '../../assets/eye.png';

const Login = ({ navigation }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) =>{
            console.log(values);
        }
    });

        const [showPassword, setShowPassword] = useState(false);


  return (
    <View style={style.container}>

        <Text style={style.movixer}>Movixer</Text>
        <Text style={style.login}>Login</Text>

        <View style={style.inputContainer}>
            <TextInput
            style={style.input}
            placeholder="email"
            placeholderTextColor={color='white'}
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            />

            <View style={style.passwordContainer}>
                <TextInput
                style={style.passwordInput}
                placeholder="password"
                placeholderTextColor={color='white'}
                secureTextEntry={!showPassword}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={showPassword ? ShowImg : HideImg} style={style.showHideIcon} />
                </TouchableOpacity>
            </View>

        </View>

        <View style={style.remember}>
            <TouchableOpacity>
            <Text style={{marginRight: 100, color:'white'}}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color:'white'}}>Forget password ?</Text>
            </TouchableOpacity>
        </View>

        <View style={style.loginBtn}>
            <Button title="Login" color="#E3651D" onPress={() => navigation.navigate('SelectTicket')} />
        </View>

        <View style={style.options}>
            <Text style={style.text}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={style.signup} >sign up</Text>
            </TouchableOpacity>
        </View>

        <View style={style.lineParent}>
            <View style={[style.groupItem, style.groupBorder]} />
            <Text style={[style.or, style.orTypo]}>or</Text>
            <View style={[style.groupInner, style.groupBorder]} />
        </View>
        
        <TouchableOpacity style={style.Google} onPress={() => navigation.navigate("Google")}>
            <Image
                style={style.icon}
                source={require("../../assets/google.png" )}
            />
            <Text style={style.signuptext1}>Continue With Google</Text>
        </TouchableOpacity>  
        
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        verticalAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        // justifyContent: 'center',
        paddingBottom: 200
    },
    movixer: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 65,
        color: '#E3651D'
    },
    login: {
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
        padding: 9,
        marginTop: 20,
        paddingLeft: 20,
        opacity: 0.7,
        color: 'white'
    },
    passwordInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        opacity: 0.7,
        borderRadius: 4,
        marginBottom: 10,
        color: 'white',
        paddingLeft: 10,
        padding: 9
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    showHideIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
        marginLeft: -40,
        marginBottom: 10
    },
    remember : {
        marginTop: 8,
        flexDirection: 'row',
        color: 'white'
    },
    loginBtn: {
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
    signup: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    lineParent: {
        marginTop: 570,
        width: 297,
        height: 19,
        position: "absolute",
        alignItems: 'center',
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
export default Login;

