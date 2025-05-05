import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ManHinhCaiDat() {
  const handleOptionPress = (option: string) => {
    Alert.alert('Tùy chọn', `Bạn đã chọn: ${option}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Update Profile')}>
        <Text style={styles.text}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Change Language')}>
        <Text style={styles.text}>Change Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Sign Out')}>
        <Text style={[styles.text, { color: 'red' }]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

