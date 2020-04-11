import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,
  Button,TouchableHighlight,Image, Alert
} from 'react-native';
import styles from '../Style/Style'
import Stack from '../Navigation/Navigation'


 class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {


if(viewId=="Login"){
  Alert.alert("Alert", "Mazal ouytedara "+viewId);

}else {
  Alert.alert("Alert", "Mazal ouytedara "+viewId);
//  console.log(this.props)
}


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

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('mdp oublié')}>
            <Text>mot de passe oublié?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}



export default LoginView
