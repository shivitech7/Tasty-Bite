import React, { useContext, useRef, useState } from 'react'
import {
    view,
    Text,
    Image,
    TouchableOpacity,
    View,
    ToastAndroid
} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import Home from '../screens/mainScreens/Home';
import MainLayout from '../screens/MainLayout';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../../redux/actions/TabActions';
import { globalState } from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: 5,
                alignItems: 'center',
                paddingLeft: 10,
                borderRadius: 10,
                // borderWidth:1,
                backgroundColor: isFocused ? '#139487' : null
            }}
            onPress={onPress}>
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: 'white',
                    resizeMode: 'contain'
                }} />
            <Text
                style={{
                    marginLeft: 10,
                    color: 'white',
                    fontSize: 14,
                    fontWeight: '500'
                }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab, user }) => {
    const { setUser } = useContext(globalState);
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 10,
                }}>
                {/* close */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        // borderWidth:1
                    }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderWidth:1
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={require('../screens/Images/cross.png')}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: 'white'
                            }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20
                    }}
                    onPress={() => console.log('Profile')}
                >
                    <Image
                        source={require('../screens/Images/user.png')}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 10,
                            backgroundColor: 'gray'
                        }}
                    />
                    <View
                        style={{
                            marginLeft: 10
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>User Name</Text>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>{user}</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        marginTop: 15
                    }}>
                    <CustomDrawerItem
                        label='Home'
                        icon={require('../screens/Images/home.png')}
                        isFocused={selectedTab == 'Home'}
                        onPress={() => {
                            setSelectedTab('Home')
                            navigation.navigate('MainLayout')
                        }}
                    />
                    <CustomDrawerItem
                        label='Cart'
                        icon={require('../screens/Images/Shop.png')}
                        isFocused={selectedTab == 'Cart'}
                        onPress={() => {
                            setSelectedTab('Cart')
                            navigation.navigate('MainLayout')
                        }}
                    />
                    <CustomDrawerItem
                        label='Profile'
                        icon={require('../screens/Images/user.png')}
                        isFocused={selectedTab == 'Profile'}
                        onPress={() => {
                            setSelectedTab('Profile')
                            navigation.navigate('MainLayout')
                        }}
                    />
                    <CustomDrawerItem
                        label='Order history'
                        icon={require('../screens/Images/timer.png')}
                        isFocused={selectedTab == 'OrderHistory'}
                        onPress={() => {
                            setSelectedTab('OrderHistory')
                            navigation.navigate('MainLayout')
                        }}
                    />
                </View>
                <View
                    style={{
                        marginBottom: 20
                    }}>
                    <CustomDrawerItem
                        label='logout'
                        icon={require('../screens/Images/logout.png')}
                        // isFocused={selectedTab == 'OrderHistory'}
                        onPress={async () => {
                            ToastAndroid.show('user loged out!', 1000);
                            await AsyncStorage.clear();
                            setUser('');
                        }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {

    const { user } = useContext(globalState);
    // const [progress, setProgress] = useState(new Animated.Value(0));
    // const ProgressValue = useDrawerProgress();
    // console.log(progress)
    // const scale = Animated.interpolateNode(progress, {
    //     inputRange: [0, 1],
    //     outputRange: [1, 0.8]
    // })

    // const borderRadius = Animated.interpolateNode(progress, {
    //     inputRange: [0, 1],
    //     outputRange: [1, 26]
    // })

    // const animatedStyle = {
    //     borderRadius,
    //     transform: [{ scale }]
    // }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#21262E',
            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'black',
                    },
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    sceneContainerStyle: {
                        backgroundColor: 'black',
                    }
                }}
                initialRouteName='MainLayout'
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            user={user} />
                    )
                }}
            >
                <Drawer.Screen name='MainLayout'>
                    {props => <MainLayout {...props}
                    />}
                </Drawer.Screen>
            </Drawer.Navigator>

        </View>
    )
}

// export default CustomDrawer;

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

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)