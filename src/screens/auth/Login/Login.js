import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';

import AuthHeading from '../../../components/AuthHeading';
import {
  AuthButtonContainer,
  container,
  inputField,
  rememberContainer,
} from '../../../CommonCss/formcss';

import {
  bold,
  flexEnd,
  font600,
  marginLeft10,
  text18,
  textCenter,
  textPrimary,
  textRed,
  textSecondary,
  textWhite,
  top50,
  width80,
} from '../../../CommonCss/Pagecss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prevState => !prevState);
  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={container}>
      <AuthHeading heading="Login" />
      <TextInput
        style={inputField}
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={inputField}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={[styles.forgotPasswordContainer, width80, flexEnd]}>
        <Text style={textRed}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={rememberContainer}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={[textPrimary, marginLeft10]}>Remember me</Text>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={[textSecondary, top50]}>
          Don't have an account?{' '}
          <Text style={[bold, textPrimary]}>Sign up</Text>
        </Text>
      </View>

      <TouchableOpacity style={AuthButtonContainer} onPress={handleLogin}>
        <Text style={[textWhite, font600, text18, textCenter]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
