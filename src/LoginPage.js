import * as React from 'react';
import {Button, View} from 'react-native';

export default function Login({navigation}) {
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
