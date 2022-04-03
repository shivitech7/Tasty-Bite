import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    autoFocus={true}
                    style={styles.search}
                    placeholder='Search'
                    onPressIn={() => console.log('clicked')}
                />
            </View>
            <View style={styles.searchItems_container}>
                <Text>
                    Search items here !
                </Text>
            </View>
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        width: '100%',
        position: 'relative',
        justifyContent: 'space-between',
        // borderWidth: 1
    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 25,
        // borderWidth: 1,
        paddingVertical: 20
    },
    search: {
        borderRadius: 30,
        backgroundColor: '#EFEEEE',
        width: '100%',
        paddingLeft: 30
    },
    searchItems_container: {
        // borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})