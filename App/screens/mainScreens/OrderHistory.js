import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import { setSelectedTab } from '../../../redux/actions/TabActions';
import Header from '../Components/Header';

const OrderHistory = ({ navigation, setSelectedTab }) => {
    useEffect(() => {
        navigation.addListener('focus', () => {
            setSelectedTab('OrderHistory')
        });
    }, [setSelectedTab])
    return (
        <View style={styles.container}>
            <Header
                containerStyle={{
                    height: 50,
                    // marginTop: 30,
                    // paddingHorizontal: 25,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginBottom: 20,
                    // borderWidth:1
                }}
                title='Order History'
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
            <View style={{flex:1, width:'100%', alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#139487'}}>
                    Order History here !
                </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#F2F2F2',
        alignItems: "center",
        justifyContent: 'space-between'
        // borderWidth:1
    },
})