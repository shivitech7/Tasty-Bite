import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import LoginComponent from "./Components/LoginComponent";

//   export default Item;
const Login = () => {

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%', height: '100%'}} >
                {/* <View style={{height:'100%', width:'100%'}}> */}
                    <View style={styles.header}>
                        <View style={styles.imageContainer}>
                            <Image
                                width={20}
                                height={16}
                                style={styles.image}
                                source={require('./Images/foodyhub.png')}
                            />
                        </View>
                        <View style={styles.tabContainer}>
                            <Text style={styles.tabTitle}>Login</Text>
                            <Text style={styles.tabTitle}>Signup</Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <LoginComponent />
                    </View>
                {/* </View> */}
            </ScrollView>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        backgroundColor: "white",
        // alignItems:'center'
        // justifyContent:'space-around'
    },
    header: {
        // flex: 2,
        width: '100%',
        // height:'50%',
        // borderWidth:1,
        alignItems: "center",
        backgroundColor: '#139487',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    imageContainer: {
        flex: 2,
        width: '50%',
        // borderWidth: 1,
        alignItems: "center",
        marginTop: 50
    },
    image: {
        height: 162.38,
        width: 131.53,
        // backgroundColor:'black'
        // tintColor:'#139487'
    },
    tabContainer: {
        flex: 1,
        width: '90%',
        flexDirection: "row",
        // borderWidth:1,
        justifyContent: "space-around",
        // padding:10,
        marginBottom: 5,
        alignItems: "flex-end",
    },
    tabTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600'
    },
    detailsContainer: {
        // flex: 3,
        width: '100%',
        // height:'50%',
        alignItems: "center",
        paddingHorizontal: 35,
        // paddingVertical:90,
        //    justifyContent:"center",
        // borderWidth:1,
    }
})