/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useEffect, useState } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import Delivery from './App/screens/mainScreens/Delivery';
// import FoodItemDetails from './App/screens/FoodItemDetails';
import Login from './App/screens/Login';
import Home from './App/screens/mainScreens/Home';
import Profile from './App/screens/mainScreens/Profile';
import Payment from './App/screens/mainScreens/Payment';
import Cart from './App/screens/mainScreens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './App/navigation/CustomDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from './redux/store/ConfigureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = configureStore()
const Stack = createStackNavigator()
export const globalState = createContext()

const App = () => {

  // const [logedin, setLogedin] = useState(false);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoging = async () => {
      const userEmail = await AsyncStorage.getItem('@user_email');
      console.log('user email: ', userEmail)
      setUser(userEmail);
      setIsLoading(false);
    }
    checkLoging()
  })

  if (isLoading == true) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <globalState.Provider value={{ user: user, setUser: setUser }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          // initialRouteName={'Home'}
          >
            {user ?
              <Stack.Screen name='drawer' component={CustomDrawer} />
              :
              <Stack.Screen name='login' component={Login} />
            }
          </Stack.Navigator>
        </globalState.Provider>
      </NavigationContainer>
    </Provider>

  );
};

const styles = StyleSheet.create({

});

export default App;
