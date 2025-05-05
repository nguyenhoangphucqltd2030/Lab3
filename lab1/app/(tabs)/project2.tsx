import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <Button 
        title="Press Me" 
        onPress={() => Alert.alert("Helloffffffhhhh!")} 
      />
    </View>
  );
}
