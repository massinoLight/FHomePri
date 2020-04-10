import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,
  Button,TouchableHighlight,Image, Alert
} from 'react-native';

import styles from '../Style/Style'

 class ForgotView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {


if(viewId=="restaurer"){
  Alert.alert("Alert", "Mazal ouytedara "+viewId);
}else {
  Alert.alert("Alert", "Mazal ouytedara "+viewId);
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

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('restaurer')}>
          <Text style={styles.loginText}>Restaurer</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('connecter')}>
            <Text>se connecter?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


export default ForgotView
