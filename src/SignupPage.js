import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function Signup({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* We will navigate to login page using navigation */}
      <Text>Welcome New User to Gadgets App!</Text>
      <Button title="signup" onPress={() => navigation.navigate('LoginPage')} />
    </View>
  );
}
