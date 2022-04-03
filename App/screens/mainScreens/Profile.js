import React, { useEffect } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { setSelectedTab } from "../../../redux/actions/TabActions";
import { connect } from "react-redux";
import Header from "../Components/Header";

const Profile = ({ navigation, setSelectedTab }) => {

    useEffect(() => {
        navigation.addListener('focus', () => {
            setSelectedTab('Profile')
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
                    marginBottom: 20
                }}
                title='My Profile'
                titleStyle={{

                }}
                leftIcon={
                    <TouchableOpacity
                        style={{ width: 22, height: 14.67 }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image style={{ tintColor: '#139487' }} source={require('../Images/toggleIcon.png')} />
                    </TouchableOpacity>
                }
            />

            <View style={styles.headingContainer}>
                <Text style={{ color: '#000000', fontWeight: '700' }}>Personal details</Text>
                <Text style={{ color: '#139487', fontWeight: '700' }}>change</Text>
            </View>
            <View style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
                <ScrollView style={{ width: '100%', height: '100%' }}>
                    <View style={styles.cardContainer}>
                        <Image style={{ height: 100, width: 91, borderRadius: 10, tintColor: 'white' }} source={require('../Images/user.png')} />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.text_color}>Marvis Ighedosa</Text>
                            <Text style={styles.text_color}>Dosamarvis@gmail.com</Text>
                            <Text style={styles.text_color}>+234 9011039271</Text>
                            <Text style={styles.text_color}>No 15 uti street off ovie palace road effurun delta state</Text>
                        </View>
                    </View>

                    <View style={styles.chipsContainer}>
                        <View style={styles.chip}>
                            <Text style={styles.text_color}>Orders</Text>
                            <Image source={require('../Images/openArrow.png')} />
                        </View>
                        <View style={styles.chip}>
                            <Text style={styles.text_color}>Pending reviews</Text>
                            <Image source={require('../Images/openArrow.png')} />
                        </View>
                        <View style={styles.chip}>
                            <Text style={styles.text_color}>Faq</Text>
                            <Image source={require('../Images/openArrow.png')} />
                        </View>
                        <View style={styles.chip}>
                            <Text style={styles.text_color}>Help</Text>
                            <Image source={require('../Images/openArrow.png')} />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    borderWidth: pressed ? 1 : 0,
                                    borderColor: pressed ? '#c0cccb' : 'white',
                                    // opacity: pressed ? 0.5 : 1,
                                    elevation: pressed ? 3 : 4
                                    // shadowColor: pressed ? 'white' : 'black',
                                },
                                {
                                    width: '90%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    // elevation: 3,
                                    borderRadius: 50,
                                    backgroundColor: '#139487',
                                },
                            ]}>
                            <Text style={{color:'white'}}>Update</Text>
                        </Pressable>
                    </View>
                </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: 'space-between'
        // borderWidth:1
    },
    headerContainer: {
        alignItems: "flex-start",
        width: '100%',
        marginBottom: 30
    },
    backButtonContainer: {
        marginBottom: 25
    },
    screenTitleContainer: {
        alignItems: "flex-start",
        width: '100%'
    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 11,
        width: '100%'
    },
    cardContainer: {
        flexDirection: "row",
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        // borderWidth:1,
        justifyContent: "space-around",
        borderRadius: 20,
        backgroundColor: '#99BBAD',
        marginBottom: 27,
        elevation: 6
    },
    text_color: {
        color: 'black',
        fontWeight: '500'
    },
    detailsContainer: {
        width: '60%',
        marginTop: 15
    },
    chipsContainer: {
        width: '100%',
        // marginBottom: 
        // borderWidth:1
    },
    chip: {
        flexDirection: "row",
        width: '100%',
        // borderWidth:1,
        justifyContent: "space-between",
        paddingHorizontal: 23,
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 27,
        backgroundColor: '#99BBAD',
        elevation: 3
    },
    buttonContainer: {
        width: '100%',
        alignItems: "center",
        backgroundColor:'white',
        // borderWidth:1,
        paddingVertical:5
    },

})