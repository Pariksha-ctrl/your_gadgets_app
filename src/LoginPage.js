import * as React from 'react';
import {Button, View} from 'react-native';

export default function Login({navigation}) {
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

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* We will navigate to home page using navigation */}
      <Button
        title="Existing User"
        onPress={() => navigation.navigate('HomePage')}
      />
    </View>
  );
}
