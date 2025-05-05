import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

// Tạo component MyButton, nhận 3 props: text, onPress, style
const MyButton = ({ text, onPress, style }: { text: string; onPress: () => void; style?: any }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// Style mặc định
const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: 'orange',
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Đây là màn hình chính
export default function Project3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton
        text="Click Me!"
        onPress={() => Alert.alert('Pressed!')}
        style={{ backgroundColor: 'green' }}
      />
    </View>
  );
}
