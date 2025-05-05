import React, { useState } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingButton = ({ text, onPress, style }: { text: string; onPress: () => void; style?: any }) => {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    await onPress();
    setLoading(false);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, style]}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoadingButton; // <== dòng này quan trọng

