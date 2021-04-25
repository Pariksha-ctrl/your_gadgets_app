import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function Signup({navigation}) {
  // capturing user data
  // declaring the state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function displaySignupForm() {
    return (
      <SafeAreaView>
        <Text>New Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />

        <Text>New Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </SafeAreaView>
    );
  }

  async function callCreatedUser() {
    const reply = await fetch('http://192.168.1.105:3000/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', // application content will be sent to JSON
      },
      // the login ceredentials given by the user will be sent to the service
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    // navigating newly created user to the login page
    if (reply.status == 200) {
      navigation.navigate('LoginPage');
    } else {
      Alert.alert('Error', 'New user cannot be created!');
      console.log('Error');
    }
  }

  return (
    <>
      {displaySignupForm()}
      <View>
        <Button
          style={styles.signupButton}
          title="signup"
          onPress={() => {
            // calling the serviceh
            callCreatedUser();
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  signupButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
