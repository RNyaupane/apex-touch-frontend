import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InitialScreen = () => {
  return (
    <View>
      <Image
        source={require('../../../img/logoApexTouch.svg')}
        style={{width: 200, height: 200}}
      />
      <Image
        source={{
          uri: 'https://www.shutterstock.com/image-photo/black-rowan-berries-on-branches-red-159086927',
        }}
      />

      {/* <Text>Initial</Text> */}
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
