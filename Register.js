import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,View
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import firebase from 'firebase';
// import { Button, Icon, Input } from "../components";
// import { Images, argonTheme } from "../constants";
import Loginform from '../components/Loginform';
import Firebase from '../components/Firebase';
//import console = require("console");
const { width, height } = Dimensions.get("screen");
class Register extends React.Component {
  // componentWillMount(){
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyCHqOznEmKTJO6d1vUVQU43DoZvcYOo4lc',
  //     authDomain: 'dauth-94d80.firebaseapp.com',
  //     databaseURL: 'https://dauth-94d80.firebaseio.com',
  //     projectId: 'dauth-94d80',
  //     storageBucket: 'dauth-94d80.appspot.com',
  //     messagingSenderId: '418818552671',
  //     appId: '1:418818552671:web:5b3c91e0087ee36e60fcea',
  //     measurementId: 'G-3HLMW07YCC'

  //   });

  //   firebase.initializeApp(config);  

  // }
  render() {
    console.log(this.props)
    return (
      
       <Loginform navigation={this.props.navigation}/>
     
    );
  }
}

const styles = StyleSheet.create({});

export default Register;
