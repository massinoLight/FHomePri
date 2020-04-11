import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,
  Button,TouchableHighlight,Image, Alert
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Style/Style'
import Profile from '../Navigation/Navigation'

function GoToButtonForgot({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`mot de passe oublié?`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}


 class LoginView extends Component {

   onClickListener = (viewId) => {
     Alert.alert("Alert", "Mazal ouytedara "+viewId);
     }


  render() {
    console.log(this.props)
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

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Se connecter</Text>
        </TouchableHighlight>

        <GoToButtonForgot screenName="Forgot" />
      </View>
    );
  }
}



export default LoginView
