import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = ({ containerStyle, title, leftIcon, rightIcon, titleStyle }) => {
    return (
        <View
            style={{
                ...containerStyle,
                flexDirection: 'row',

                // borderWidth:1,
                width: '100%',
                alignItems: 'center'
            }}>
            {leftIcon}
            <View style={{
                width: '80%',
                alignItems: 'center',
                // paddingRight: 50,
                marginLeft:'5%',
                // borderWidth: 1
            }}>
                <Text style={{ fontSize: 24, fontWeight: '800', color: 'black' }}>{title}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                {rightIcon}
            </View>
        </View>
    )
}

export default Header