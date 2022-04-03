import React, { useEffect, useState } from "react";
import { FlatList, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View, TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import foodItem from '../Images/foodItem1.png';
import lemonade from '../Images/lemonade.jpeg';
import Snacks from '../Images/snacks.jpeg';
import Sauce from '../Images/sauce.jpeg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { continueStatement } from "@babel/types";
import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";
import Header from "../Components/Header";
import { connect } from "react-redux";
import { setSelectedTab } from "../../../redux/actions/TabActions";

const Foods = [{
    id: '1',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
},
{
    id: '2',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
},
{
    id: '3',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
},
{
    id: '4',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
}, {
    id: '2',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
},
{
    id: '3',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
},
{
    id: '4',
    name: 'Veggie tommato mix',
    cost: 'N1,900',
    image: foodItem
}]

const snacks = [{
    id: '1',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
},
{
    id: '2',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
},
{
    id: '3',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
},
{
    id: '4',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
}, {
    id: '2',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
},
{
    id: '3',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
},
{
    id: '4',
    name: 'Pudding',
    cost: 'N1,900',
    image: Snacks
}]

const drinksData = [{
    id: '1',
    name: 'Fresh lemonade',
    cost: 'N1,900',
    image: lemonade
},
{
    id: '2',
    name: 'Fresh lemonade',
    cost: 'N1,900',
    image: lemonade
},
{
    id: '3',
    name: 'Fresh lemonade',
    cost: 'N1,900',
    image: lemonade
},
{
    id: '4',
    name: 'Fresh lemonade',
    cost: 'N1,900',
    image: lemonade
}]

const sauce = [{
    id: '1',
    name: 'Tomato sauce',
    cost: 'N1,900',
    image: Sauce
},
{
    id: '2',
    name: 'Tomato sauce',
    cost: 'N1,900',
    image: Sauce
},
{
    id: '3',
    name: 'Tomato sauce',
    cost: 'N1,900',
    image: Sauce
},
{
    id: '4',
    name: 'Tomato sauce',
    cost: 'N1,900',
    image: Sauce
}]
const Home = ({ navigation, selectedTab, setSelectedTab, }) => {

    useEffect(() => {
        navigation.addListener('focus', () => {
            setSelectedTab('Home')
        });
    }, [setSelectedTab])

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Foods' },
        { key: 'second', title: 'Drinks' },
        { key: 'third', title: 'Snacks' },
        { key: 'fourth', title: 'Sauce' }
    ]);
    const FoodsRoute = () => (
        <View style={styles.eachScrollItemContainer}>
            <ScrollView horizontal style={{ width: '100%' }} >
                <View style={styles.cardsContainer}>
                    {Foods.map((e, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={({ pressed }) => [
                                    styles.card,
                                    {
                                        elevation: pressed ? 3 : 6
                                    }
                                ]}
                                onPress={() => navigation.navigate('itemDetails', { e })}>
                                <Image style={{ width: 120, height: 120, borderRadius: 100, position: "absolute", top: -30 }} source={e.image} />
                                <View style={styles.itemDetails}>
                                    <Text style={{ fontSize: 22, fontWeight: '600', textAlign: "center", color: '#000000' }}>{e.name}</Text>
                                    <Text style={{ color: '#139487', fontWeight: '700', fontSize: 17, marginTop: 10 }}>{e.cost}</Text>
                                </View>
                            </Pressable>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );

    const DrinksRoute = () => (
        <View style={styles.eachScrollItemContainer}>
            <ScrollView horizontal style={{ width: '100%' }}>
                <View style={styles.cardsContainer}>
                    {drinksData.map((e, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={({ pressed }) => [
                                    styles.card,
                                    {
                                        elevation: pressed ? 3 : 6
                                    }
                                ]}
                                onPress={() => navigation.navigate('itemDetails', { e })}>
                                <Image style={{ width: 120, height: 120, borderRadius: 100, position: "absolute", top: -30 }} source={e.image} />
                                <View style={styles.itemDetails}>
                                    <Text style={{ fontSize: 22, fontWeight: '600', textAlign: "center", color: '#000000' }}>{e.name}</Text>
                                    <Text style={{ color: '#139487', fontWeight: '700', fontSize: 17, marginTop: 10 }}>{e.cost}</Text>
                                </View>
                            </Pressable>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );
    const SnacksRoute = () => (
        <View style={styles.eachScrollItemContainer}>
            <ScrollView horizontal style={{ width: '100%' }}>
                <View style={styles.cardsContainer}>
                    {snacks.map((e, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={({ pressed }) => [
                                    styles.card,
                                    {
                                        elevation: pressed ? 3 : 6
                                    }
                                ]}
                                onPress={() => navigation.navigate('itemDetails', { e })}>
                                <Image style={{ width: 100, height: 100, borderRadius: 100, position: "absolute", top: -30 }} source={e.image} />
                                <View style={styles.itemDetails}>
                                    <Text style={{ fontSize: 22, fontWeight: '600', textAlign: "center", color: '#000000' }}>{e.name}</Text>
                                    <Text style={{ color: '#139487', fontWeight: '700', fontSize: 17, marginTop: 10 }}>{e.cost}</Text>
                                </View>
                            </Pressable>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );
    const SauceRoute = () => (
        <View style={styles.eachScrollItemContainer}>
            <ScrollView horizontal style={{ width: '100%' }}>
                <View style={styles.cardsContainer}>
                    {sauce.map((e, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={({ pressed }) => [
                                    styles.card,
                                    {
                                        elevation: pressed ? 3 : 6
                                    }
                                ]}
                                onPress={() => navigation.navigate('itemDetails', { e })}>
                                <Image style={{ width: 100, height: 100, borderRadius: 100, position: "absolute", top: -30 }} source={e.image} />
                                <View style={styles.itemDetails}>
                                    <Text style={{ fontSize: 22, fontWeight: '600', textAlign: "center", color: '#000000' }}>{e.name}</Text>
                                    <Text style={{ color: '#139487', fontWeight: '700', fontSize: 17, marginTop: 10 }}>{e.cost}</Text>
                                </View>
                            </Pressable>
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    );

    const renderScene = SceneMap({
        first: FoodsRoute,
        second: DrinksRoute,
        third: SnacksRoute,
        fourth: SauceRoute
    });
    const renderTabBar = props => (
        <TabBar
            {...props}
            labelStyle={{ color: 'black', width: '100%', textAlign: "center" }}
            indicatorStyle={{ backgroundColor: '#139487' }}
            style={{ backgroundColor: 'white', shadowOffset: null }}
        />
    );

    return (
        // <KeyboardAvoidingWrapper>
        <View style={styles.container}>
            <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ height: '100%' }}>
                <View style={{ height: '100%', width: '100%' }}>
                    <Header
                        containerStyle={{
                            height: '10%',
                            // marginTop: 30,
                            paddingHorizontal: 25,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        // title={selectedTab != 'Home' && selectedTab}
                        leftIcon={
                            <TouchableOpacity
                                style={{ width: 22, height: 22 }}
                                onPress={() => navigation.openDrawer()}
                            >
                                <Image style={{ tintColor: '#139487', resizeMode: 'contain', width: 22, height: 22 }} source={require('../Images/Menu.png')} />
                            </TouchableOpacity>
                        }
                        rightIcon={
                            <TouchableOpacity
                                style={{ width: 24, height: 24 }}>
                                <Image style={{ tintColor: '#139487', resizeMode: 'contain', width: 24, height: 24 }} source={require('../Images/Shop.png')} />
                            </TouchableOpacity>
                        }

                    />
                    <View style={{ height: '100%', width: '100%' }}>
                        <View style={styles.headerContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Delicious food for you</Text>
                            </View>
                            <View style={styles.searchContainer}>
                                <TouchableOpacity
                                    style={styles.search}
                                    // placeholder='Search'
                                    onPress={() => { console.log('clicked'); navigation.navigate('search') }}
                                >
                                    <Text style={{ lineHeight: 50 }}>Search</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.middleContainer}>
                            <TabView
                                renderTabBar={renderTabBar}
                                navigationState={{ index, routes }}
                                renderScene={renderScene}
                                onIndexChange={setIndex}
                                swipeEnabled={false}
                                initialLayout={{ width: layout.width }}
                            />
                        </View>

                    </View>
                    <View style={styles.footerContainer}>
                        <Image style={{ tintColor: 'black' }} source={require('../Images/home.png')} />
                        <Image style={{ tintColor: 'black' }} source={require('../Images/heart.png')} />
                        <Image style={{ tintColor: 'black' }} source={require('../Images/user.png')} />
                        <Image style={{ tintColor: 'black' }} source={require('../Images/timer.png')} />
                    </View>
                    {/* </ScrollView> */}
                </View>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#F2F2F2',
        width: '100%',
        position: 'relative',
        justifyContent: 'space-between',
        // borderWidth: 1
    },
    headerContainer: {
        // flex: 1.3,
        justifyContent: "space-around",
        // borderWidth: 1,
        paddingHorizontal: 25,
        height: '30%',
        // marginBottom: 15
    },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleContainer: {
        // borderWidth:1,
        width: '70%',
        // justifyContent:'space-around'
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        color: '#000000'
    },
    searchContainer: {
        // borderWidth: 1,
        width: '100%'
    },
    search: {
        borderRadius: 30,
        backgroundColor: '#EFEEEE',
        width: '100%',
        paddingLeft: 30,
        height: 50
    },
    middleContainer: {
        // marginTop: 20,
        // flex: 1,
        // borderWidth: 1,
        // borderColor: 'blue',
        height: '45%'
    },
    tabItemContainer: {
        // borderWidth: 1,
        marginRight: 40,

    },
    tabItem: {
        fontSize: 17,
        fontWeight: '400'
    },
    eachScrollItemContainer: {
        flex: 1,
        // marginTop: 70,
        // borderWidth: 1,
        width: '100%'
    },
    cardsContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // borderWidth:1, borderColor:'red',
        paddingTop: 25
    },
    card: {
        position: 'relative',
        // borderWidth: 1,
        width: 180,
        height: 200,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        alignItems: "center",
        marginRight: 20,
        justifyContent: 'space-around',
        shadowColor: '#139487'
    },
    itemDetails: {
        alignItems: "center",
        marginTop: 50,
        // borderWidth:1,
        marginHorizontal: 20,
    },
    footerContainer: {
        // flex:1,
        width: '100%',
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        position: 'absolute',
        bottom: 0,
        height: 70,
        elevation: 6,
        alignItems: 'center',
        backgroundColor: '#139487',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }
})