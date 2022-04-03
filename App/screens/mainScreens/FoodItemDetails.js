import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import FoodItem from '../Images/foodItem1.png';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Pressable
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Heart from '../Images/heart.png';
import Back from '../Images/back.png';

const FoodItemDetails = ({ route, navigation }) => {
    const { e } = route.params;
    console.log(e)
    const images = [
        e.image,
        e.image,
        e.image,
        e.image
    ]
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Pressable
                    style={({ pressed }) => [{
                        elevation: pressed ? 3 : 6,
                        opacity: pressed ? 0.5 : 1
                    }]}
                    onPress={() => navigation.goBack()}><Image style={{ tintColor: '#139487' }} source={Back} /></Pressable>
                <Image style={{ tintColor: 'red' }} source={Heart} />
            </View>
            <View style={styles.scrollItems}>

                <SliderBox
                    images={images}
                    style={styles.item}
                    dotColor="#139487"
                    inactiveDotColor="#90A4AE"
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 15,
                        // marginHorizontal: 10,
                        padding: 6,
                        //    marginEnd:10
                    }}
                    autoplay
                // parentWidth={240}
                />
            </View>
            <View style={styles.itemInfo}>
                <View style={styles.title}>
                    <Text style={styles.item_title}>{e.name}</Text>
                    <Text style={{ fontSize: 20, color: '#139487', fontWeight: 'bold' }}>{e.cost}</Text>
                </View>
                <View style={{ paddingHorizontal: 25, marginBottom: 30 }}>
                    <View style={styles.description}>
                        <Text style={styles.description_title}>Delivery info</Text>
                        <Text>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.description_title}>Return policy</Text>
                        <Text>
                            All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.
                        </Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => {console.log(e); navigation.navigate('Cart')}}
                    style={styles.button}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Add to cart</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default FoodItemDetails;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // padding: 50,
        backgroundColor: "white",
        // borderWidth:1
    },
    scrollItems: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        // alignItems:'flex-start',
        justifyContent: 'center',
        // borderWidth:1,
        // borderColor: 'red'
    },
    item: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        // marginLeft: '50%',
        // marginRight:'50%',
        // padding: 10,
        // borderWidth:1,
        // borderColor:'red',
        borderRadius: 100,
        marginBottom: 40
    },
    itemInfo: {
        flex: 1.5,
        // marginTop: 30,
        alignItems: 'center'
    },
    item_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    title: {
        alignItems: 'center',
        marginBottom: 25,
        fontSize: 20
    },
    description: {
        marginBottom: 20
    },
    description_title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    back: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 2,
        marginStart: 50,
        marginEnd: 50,
        paddingHorizontal: 25,
        marginTop: 35
    },
    button: {
        borderRadius: 25,
        backgroundColor: '#139487',
        width: 250,
        height: 40,
        justifyContent: 'center'
    }
});
