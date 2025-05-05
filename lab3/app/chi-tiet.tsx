import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ChiTietLienHe() {
  const { ten, sdt } = useLocalSearchParams();

  const email = `${(ten as string).toLowerCase().replace(/\s/g, '')}@example.com`;

  return (
    <View style={styles.container}>
      {/* Header: Avatar + Tên + SĐT */}
      <View style={styles.header}>
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(ten as string)}&background=2196F3&color=fff&rounded=true&size=128`,
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{ten}</Text>
        <Text style={styles.phone}>📞 {sdt}</Text>
      </View>

      {/* Thông tin chi tiết */}
      <View style={styles.infoSection}>
        <View style={styles.row}>
          <Text style={styles.label}>📧 Email</Text>
          <Text style={styles.value}>{email}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>🏢 Work</Text>
          <Text style={styles.value}>0123-456-789</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>📱 Personal</Text>
          <Text style={styles.value}>{sdt}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#fff',
  },
  infoSection: {
    padding: 20,
  },
  row: {
    marginVertical: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
});


