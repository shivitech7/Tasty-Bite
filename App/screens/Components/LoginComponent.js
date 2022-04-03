import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { globalState } from "../../../App";

const LoginComponent = () => {

    const [email, setEmail] = useState();
    const [emailValidation, setEmailValidation] = useState();
    const [password, setPassword] = useState();
    const [loginButtonClicked, setLoginButtonClicked] = useState(false);
    const { setUser } = useContext(globalState);

    const validateEmail = (e) => {
        var re = /\S+@\S+\.\S+/;
        const emailIsValid = re.test(e)
        setEmailValidation(emailIsValid);
        console.log(emailIsValid);
        setEmail(e)
    }

    const Login = async () => {
        try {
            if (emailValidation == true) {
                if (password.length >= 8) {
                    setLoginButtonClicked(true);
                    await AsyncStorage.setItem('@user_email', email);
                    setUser(email);
                }
                else {
                    ToastAndroid.show('Password must be atleast 8 characters long', 1000);
                }
            }
            else {
                ToastAndroid.show('Enter a valid email!', 1000)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.loginContainer}>
            <View style={{ marginBottom: 60 }}>
                <View style={[styles.inputContainer, { marginBottom: '10%' }]}>
                    <Text>Email address</Text>
                    <TextInput
                        placeholder='Email address...'
                        style={styles.input}
                        onChangeText={(e) => { validateEmail(e) }} />
                </View>
                <View style={[styles.inputContainer]}>
                    <Text>Password</Text>
                    <TextInput
                        placeholder='Password...'
                        style={styles.input}
                        onChangeText={(e) => setPassword(e)}
                    />
                </View>
                <Text style={{ color: '#139487', fontWeight: '600', fontSize: 17, marginTop: 10 }}>Forgot password?</Text>
            </View>
            {/* <View> */}
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            borderWidth: pressed ? 0 : 2,
                            borderColor: pressed ? 'orange' : 'white',
                            // opacity: pressed ? 0.5 : 1,
                            shadowColor: pressed ? 'white' : 'black',
                        },
                        {
                            width: '90%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',

                            elevation: 3,
                            borderRadius: 50,
                            backgroundColor: '#139487',
                        },
                    ]}
                    onPress={() => { console.log(loginButtonClicked); loginButtonClicked == false ? Login() : <></> }}>
                    {loginButtonClicked ?
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{ width: 46, height: 20, textAlign: "center", color: 'white' }}
                            >Login
                            </Text>
                            <ActivityIndicator animating={loginButtonClicked} color='white' />
                        </View>
                        :
                        <Text
                            style={{ width: 46, height: 20, textAlign: "center", color: 'white' }}
                        >Login
                        </Text>
                    }

                </Pressable>
            </View>
            {/* </View> */}
        </View>
    )
}

export default LoginComponent;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        // borderWidth: 1,
        // paddingVertical:'15%',
        marginVertical: '15%',
        // marginTop: '20%',
        width: '100%',
        justifyContent: "space-between",
        height: '100%'
    },
    inputContainer: {
        paddingHorizontal: 5
        // marginBottom: 46
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        // width: '90%'
    },
    buttonContainer: {
        alignItems: "center",
        // borderWidth: 1,
        // marginBottom:10
    }
})