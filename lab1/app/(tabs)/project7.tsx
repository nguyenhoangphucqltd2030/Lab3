import { Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

export default function Project7() {
  const [name, setName] = useState(''); // 1️⃣

  return (
    <View style={{ padding: 20 }}>
      <Text>What is your name?</Text>
      <TextInput
        value={name} // 2️⃣
        onChangeText={setName} // 3️⃣
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        placeholder="Enter name"
      />
      <Button
        title="Submit"
        onPress={() => alert(`Hello, ${name}!`)} // 4️⃣
      />
    </View>
  );
}
