import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import logo from '../../../img/logo.png';

const InitialScreen = () => {
  return (
    <View>
      <Image source={logo} style={{width: 200, height: 200}} />
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
