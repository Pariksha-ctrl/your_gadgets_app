import * as React from 'react';
import {Button, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* We will navigate to login page using navigation */}
      <Button title="Logout" onPress={() => navigation.navigate('LoginPage')} />
    </View>
  );
}
