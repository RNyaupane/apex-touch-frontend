import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-vector-icons';

const AuthTextInput = ({placeholder, secureTextEntry, onTextChange}) => {
  const [text, setText] = useState('');

  const handleChange = inputText => {
    setText(inputText);
    onTextChange(inputText); // Pass the text to the parent component
  };

  return (
    <View style={styles.inputContainer}>
      <Icon name="person" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={text}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E7E8EA',
  },
  inputField: {
    flex: 1,
    height: '100%',
    paddingLeft: 15,
    color: '#1D1E20',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default AuthTextInput;
