import React from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native'

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView contentContainerStyle={{flex:1}} ref={(ref) => scrollView = ref}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper;