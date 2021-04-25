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

export default function Login({navigation}) {
  // declaring the state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function displayLoginForm() {
    return (
      <SafeAreaView>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />

        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </SafeAreaView>
    );
  }

  async function validateUser() {
    const reply = await fetch('http://192.168.1.105:3000/login', {
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
      navigation.navigate('HomePage');
    } else {
      Alert.alert('Error', 'No use found, Invalid ceredentials! Try Again!');
      console.log('Error');
    }
  }

  return (
    <>
      {displayLoginForm()}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* We will navigate to home page using navigation */}
        <Button
          title="Login"
          onPress={() => {
            // calling and validating the user
            validateUser();
            // navigating user to the home page if his/her login ceredentials are valid
            // navigation.navigate('HomePage')
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
