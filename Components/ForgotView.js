import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,
  Button,TouchableHighlight,Image, Alert
} from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from '../Style/Style'

//la fonction qui va permettre la navigation entre les pages

function GoToButtonLogin({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Retourner au login?`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

 class ForgotView extends Component {


   onClickListener = (viewId) => {
     Alert.alert("Alert", "Mazal ouytedara "+viewId);
     }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_311846.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Login"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('restaurer')}>
          <Text style={styles.loginText}>Restaurer</Text>
        </TouchableHighlight>

     <GoToButtonLogin screenName="Login" />
      </View>
    );
  }
}


export default ForgotView
