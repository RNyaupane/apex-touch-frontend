import {Image, StyleSheet, Text, View} from 'react-native';
import {DotIndicator, CirclesLoader} from 'react-native-indicators';

import React from 'react';
import logo from '../../../img/logo.png';
import {
  centeredContainer,
  containerFull,
  logoImage,
} from '../../CommonCss/Pagecss';

const InitialScreen = () => {
  return (
    <View style={containerFull}>
      <View style={centeredContainer}>
        <Image source={logo} style={logoImage} />
        <DotIndicator color="white" size={6} />
      </View>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
