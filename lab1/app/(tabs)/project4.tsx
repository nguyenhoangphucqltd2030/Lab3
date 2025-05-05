import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0); // 1️⃣

  return (
    <View style={{ padding: 40 }}>
      <Text>You clicked {count} times</Text> {/* 2️⃣ */}
      <Button title="Click me" onPress={() => setCount(count + 1)} /> {/* 3️⃣ */}
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}
