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
import AuthTextInput from '../../../components/AuthTextInput';

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
    <View style={styles.container}>
      <AuthHeading heading="Login" />
      <AuthTextInput
        placeholder="Enter email"
        onTextChange={text => setEmail(text)}
      />

      <AuthTextInput
        placeholder="Enter password"
        secureTextEntry
        onTextChange={text => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={() => console.log('Forgot Password?')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.rememberContainer}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.rememberText}>Remember me</Text>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.span}>Sign up</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotPasswordContainer: {
    width: '80%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: 'red',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  rememberText: {
    marginLeft: 10,
    color: '#1D1E20',
  },
  buttonContainer: {
    backgroundColor: '#0F4871',
    padding: 11,
    borderRadius: 20,
    height: 50,
    width: 300,
    top: 65,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  signUpContainer: {
    marginTop: 10,
  },
  signUpText: {
    color: '#1D1E20',
    top: 50,
  },
  span: {
    fontWeight: 'bold',
  },
});

export default Login;
