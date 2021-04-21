import * as React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Signup({navigation}) {
  function displaySignupForm() {
    return (
      <SafeAreaView>
        <Text>Username:</Text>
        <TextInput style={styles.input} />

        <Text>Password:</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </SafeAreaView>
    );
  }

  return (
    <>
      {displaySignupForm()}
      <View>
        <Button
          style={styles.signupButton}
          title="signup"
          onPress={() => navigation.navigate('LoginPage')}
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
