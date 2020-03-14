import React from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Text, 
  ImageBackground
} from 'react-native';
import Constrant from 'expo-constants'

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  statusBar: {
    height: Constrant.statusBarHeight
  },
  loginBox: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 16,
    padding: 16
  },
  commonBox: {
    borderRadius: 8,
    padding: 10
  },
  commonElement: {
    margin: 10
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    color: "white",
    marginBottom: 10
  },
  inputText: {
    height: 40,
    borderColor: "blue",
    backgroundColor: "white",
    borderRadius: 5
  },
  buttonLogin: {
    backgroundColor: "grey",
    alignItems: 'center'
  },
  buttonLoginText: {
    color: "white"
  }
});

export default class LoginScreen extends React.Component{
  render() {
    return (
      <View style={styles.main}>
         <View style={styles.statusBar}/>
        <ImageBackground 
				source={require('../assets/images/hhh.jpg')}
        style={styles.main}>
      <View style={[styles.loginBox]}>
      <Text style={[styles.h1, styles.commonElement]}>INI LOGIN</Text>
        <TextInput
          placeholder="Username"
          style={[styles.commonElement, styles.commonBox, styles.inputText]}
        />
         <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.commonElement, styles.commonBox, styles.inputText]}
        />
        {/* <Button tittle="Login"/> */}
        <TouchableOpacity
        style={[styles.commonElement, styles.commonBox, styles.buttonLogin]}>
           <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    )
  }
}
