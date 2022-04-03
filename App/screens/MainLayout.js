import { useDrawerProgress } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { connect } from 'react-redux';
import { setSelectedTab } from '../../redux/actions/TabActions';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './mainScreens/Cart';
import Home from './mainScreens/Home';
import Profile from './mainScreens/Profile';
import OrderHistory from './mainScreens/OrderHistory';
import FoodItemDetails from './mainScreens/FoodItemDetails';
import Search from './mainScreens/Search';


const Stack = createStackNavigator()

const MainLayout = ({ selectedTab, setSelectedTab, navigation }) => {
    console.log(selectedTab)
    useEffect(() => {
        navigation.navigate(selectedTab);
    }, [selectedTab])
    const progress = useDrawerProgress();

    const screenStyle = useAnimatedStyle(() => {
        const scale = interpolate(progress.value, [0, 1], [1, 0.8],)

        const borderRadius = interpolate(progress.value, [0, 1], [1, 20],)

        return {
            transform: [
                {
                    scale,
                },
            ],
            borderRadius,
        }
    })

    return (

        <Animated.View
            style={[
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F2F2F2',
                    display: 'flex',
                    // paddingVertical: 30
                    // borderWidth:10
                },
                screenStyle
            ]}>

            <View style={{ flex: 1, width: '100%' }}>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Cart' component={Cart} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='OrderHistory' component={OrderHistory} />
                    <Stack.Screen name='itemDetails' component={FoodItemDetails} />
                    <Stack.Screen name='search' component={Search} />
                </Stack.Navigator>
            </View>

        </Animated.View>
    )
}
const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderRadius: 25
    }
})
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);