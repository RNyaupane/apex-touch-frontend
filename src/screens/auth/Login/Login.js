import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

const Login = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>

      <TextInput
        style={styles.inputField}
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View style={styles.rememberContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={value => setRememberMe(value)}
        />
        <Text style={styles.rememberText}>Remember me</Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001C30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  inputField: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rememberText: {
    marginLeft: 10,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpContainer: {
    marginTop: 10,
  },
  signUpText: {
    color: 'blue',
  },
});

export default Login;
