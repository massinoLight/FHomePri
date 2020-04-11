import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import {StyleSheet,TextInput,TouchableHighlight,Image, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../Components/LoginView'
import ForgotView from '../Components/ForgotView'
import styles from '../Style/Style'



function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}


function Login({ navigation }) {
  return (
  <LoginView/>
  );
}

function Forgot({ navigation }) {
  return (
  <ForgotView/>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>

    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#DCDCDC' },
      }}
    />

    <Stack.Screen
      name="Forgot"
      component={Forgot}
      options={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#DCDCDC' },
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#DCDCDC' },
      }}
    />



    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
