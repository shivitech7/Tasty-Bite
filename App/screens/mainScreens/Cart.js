import React, { useState, useRef, useEffect } from "react";
import { Animated, StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, Pressable, ScrollView, Button } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from "../Components/Header";
import { setSelectedTab } from "../../../redux/actions/TabActions";
import { connect } from "react-redux";

const DATA = [
    {
        key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Veggie tomato mix',
        cost: '#1,900'
    },
    {
        key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'SVeggie tomato mix',
        cost: '#1,900'
    },
    {
        key: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Veggie tomato mix',
        cost: '#1,900'
    },
    {
        key: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'FVeggie tomato mix',
        cost: '#1,900'
    },
    {
        key: '58694a0f-3da1-471f-bd96-145571e29d70',
        title: 'Veggie tomato mix',
        cost: '#1,900'
    },
];

const Cart = ({ navigation, setSelectedTab }) => {

    useEffect(() => {
        navigation.addListener('focus', () => {
            setSelectedTab('Cart')
        });
    }, [setSelectedTab])

    const [listItem, setListItem] = useState(DATA);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image style={{ width: '100%', height: '100%', borderRadius: 40 }} source={require('../Images/lemonade.jpeg')} />
                </View>
                <View style={styles.itemDetails}>
                    <Text style={{ fontSize: 17, fontWeight: '600', color: '#000' }}>{item.title}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: '#139487' }}>{item.cost}</Text>
                </View>
                <View style={{ borderRadius: 30, backgroundColor: '#139487', position: "absolute", paddingHorizontal: 8, left: '90%', bottom: '10%' }}><Text style={{ color: '#fff' }}>- 1 +</Text></View>
            </View>
        )
    }

    const deleteItem = (key) => {
        console.log("Inside delete function");
        console.log(key);
        const newData = [...listItem];
        const prevIndex = listItem.findIndex(item => item.key === key);
        newData.splice(prevIndex, 1);
        setListItem(newData);
    }
    const renderHiddenItem = ({ item }) => {
        console.log(item.key);
        return (
            <View style={styles.rowBack}>
                <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <Text onPress={() => deleteItem(item.key)} style={styles.backTextWhite}>Delete</Text>
                </View>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    height: 50,
                    // marginTop: 30,
                    paddingHorizontal: 25,
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}
                title='Cart'
                titleStyle={{

                }}
                leftIcon={
                    <TouchableOpacity
                        style={{ width: 22, height: 14.67 }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image style={{tintColor:'#139487'}} source={require('../Images/toggleIcon.png')} />
                    </TouchableOpacity>
                }
            />
            <View style={{ alignItems: "center", width: '100%', flex: 7, marginBottom: 50 }}>
                {/* <View style={styles.screenHeaderContainer}>
                    <Image source={require('../Images/back.png')} />
                    <Text style={styles.headerName}>Cart</Text>
                </View> */}
                <View style={styles.titleContainer}>
                    <Image source={require('../Images/iwwa_swipe.png')} />
                    <Text style={{ marginLeft: 5, fontSize: 10, fontWeight: '400', color: '#000' }}>swipe on an item to delete</Text>
                </View>
                {/* <ScrollView style={{height:'100%', borderWidth:1}}> */}
                <View style={styles.cartItemsContainer}>
                    <SwipeListView
                        style={{ width: '100%', paddingTop: 10 }}
                        contentContainerStyle={{ alignItems: "center" }}
                        useFlatList={true}
                        disableRightSwipe
                        data={listItem}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        rightOpenValue={-75}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        useNativeDriver={false}
                    />

                </View>

                {/* </ScrollView> */}
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            borderWidth: pressed ? 1 : 0,
                            borderColor: pressed && 'white',
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
                    ]}>
                    <Text style={{ color: 'white' }}>Complete order</Text>
                </Pressable>
            </View>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: 'white',
        // alignItems: "center",
        justifyContent: "space-between",
        // borderWidth:1,
        alignItems: "center"
    },
    screenHeaderContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 42,
        paddingHorizontal: 40,
    },
    headerName: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    titleContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        // borderWidth:1
    },
    cartItemsContainer: {
        width: '100%',
        alignItems: "center",
        // justifyContent:"center",
        // borderWidth:1,
        paddingVertical: 15,
        // marginBottom: 50
    },
    cardContainer: {
        flexDirection: "row",
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // borderWidth:1,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: '#ffffff',
        marginBottom: 27,
        elevation: 6,
        position: "relative",
        marginLeft: '5%'
        // shadowOffset: [
        //     width = 10,
        //     height = 20
        // ]
    },
    imageContainer: {
        // borderWidth: 1,
        width: 50,
        height: 50,
        // marginTop:10,
        borderRadius: 40
    },
    itemDetails: {
        width: '70%',
        marginLeft: 10,
        // borderWidth: 1
    },
    buttonContainer: {
        width: '100%',
        alignItems: "center",
        // borderWidth:1,
        // marginVertical: 30
        // paddingTop:30,
        flex: 1
    },
    backTextWhite: {
        color: '#FFF',
        textAlign: "center"

    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        borderRadius: 20,
        marginBottom: 28,
        marginLeft: '4.9%'
    },
    backRightBtn: {
        // alignItems: 'center',
        bottom: 0,
        // width:500,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        borderRadius: 20,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderRadius: 20,
        width: 70,
    }
})