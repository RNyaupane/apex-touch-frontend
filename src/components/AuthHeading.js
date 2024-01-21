import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AuthHeading = props => {
  return (
    <View>
      <Text style={styles.loginText}>{props.heading}</Text>
    </View>
  );
};

export default AuthHeading;

const styles = StyleSheet.create({
  loginText: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 40,
    color: '#1D1E20',
  },
});
