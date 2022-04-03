import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { RadioButton } from 'react-native-paper';

const Payment = () => {
    const [value, setValue] = useState('Door delivery');
    const [paymentValue, setPaymentValue] = useState('Card')
    return (
        <View style={styles.container}>
            <View style={styles.screenHeaderContainer}>
                <Image source={require('../Images/back.png')} />
                <Text style={styles.headerName}>Checkout</Text>
            </View>
            <View style={styles.screenNameCOntainer}>
                <Text style={{ fontSize: 34, fontWeight: '600', color: '#000' }}>Payment</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.cardTitle}>Payment method</Text>
            </View>
            <View style={styles.cardContainer}>
                <RadioButton.Group onValueChange={value => setPaymentValue(value)} value={paymentValue}>
                    <RadioButton.Item
                        label="Card"
                        value="Card"
                        position='leading'
                        labelStyle={{ textAlign: "left", marginLeft: 5 }}
                        color='#F47B0A'
                    />
                    <View style={{ width: '80%', height: 1, backgroundColor: 'rgb(231, 233, 235)', marginLeft: '20%' }}></View>
                    <RadioButton.Item
                        label="Bank account"
                        value="Bank account"
                        position='leading'
                        labelStyle={{ textAlign: "left", marginLeft: 5 }}
                        color='#F47B0A'
                    />
                </RadioButton.Group>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.cardTitle}>Delivery method</Text>
            </View>
            <View style={styles.cardContainer}>
                <View>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <RadioButton.Item label="Door delivery " value="Door delivery" position='leading' labelStyle={{ textAlign: "left", marginLeft: 5 }} color='#F47B0A' />
                        <View style={{ width: '80%', height: 1, backgroundColor: 'rgb(231, 233, 235)', marginLeft: '20%' }}></View>
                        <RadioButton.Item label="Pick up" value="Pick up" position='leading' labelStyle={{ textAlign: "left", marginLeft: 5 }} color='#F47B0A' />
                    </RadioButton.Group>
                </View>
            </View>
            <View style={styles.totalBillContainer}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: '#000' }}>Total</Text>
                <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}>23,000</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            borderWidth: pressed ? 2 : 0,
                            borderColor: pressed && 'orange',
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
                            backgroundColor: '#FA4A0C',
                        },
                    ]}>
                    <Text style={{ color: 'white' }}>Proceed to payment</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Payment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 50,
        backgroundColor: '#F2F2F2',
        alignItems: "center",
        // borderWidth:1
    },
    screenHeaderContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 42
    },
    headerName: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    screenNameCOntainer: {
        width: '100%',
        marginBottom: 30
    },
    titleContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000'
    },
    cardContainer: {
        // flexDirection: "row",
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 25,
        // borderWidth:1,
        justifyContent: "space-around",
        borderRadius: 20,
        backgroundColor: '#ffffff',
        marginBottom: 27,
        elevation: 4
    },
    detailsContainer: {
        width: '100%',
        // borderWidth:1,
        // marginTop: 15
    },
    totalBillContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    buttonContainer: {
        width: '100%',
        alignItems: "center"
    }
})