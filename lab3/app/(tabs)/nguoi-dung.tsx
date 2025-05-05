import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRouter } from 'expo-router'; // 🛠 Thêm useRouter

export default function ManHinhNguoiDung() {
  const navigation = useNavigation();
  const router = useRouter(); // 🛠 Khai báo router

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Người Dùng',
      headerRight: () => (
        <TouchableOpacity onPress={() => router.push('/cai-dat')}>
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/men/75.jpg',
        }}
        style={styles.avatar}
      />
      <Text style={styles.ten}>Way Rooney</Text>
      <Text style={styles.sdt}>📞 041-108-5153</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  ten: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sdt: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 15,
  },
});

