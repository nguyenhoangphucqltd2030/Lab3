import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { xoaYeuThich } from '../../store';
import { useRouter } from 'expo-router';

export default function ManHinhYeuThich() {
  const dsYeuThich = useSelector((state: any) => state.danhBa.yeuThich);
  const dispatch = useDispatch();
  const router = useRouter();

  if (dsYeuThich.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>💔 Danh sách yêu thích</Text>
        <Text style={styles.text}>Chưa có liên hệ nào được thêm vào!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={dsYeuThich}
      keyExtractor={(item) => item.phone}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/chi-tiet',
              params: {
                ten: `${item.name.first} ${item.name.last}`,
                sdt: item.phone,
              },
            })
          }
          style={styles.item}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.ten}>{item.name.first} {item.name.last}</Text>
            <Text style={styles.sdt}>{item.phone}</Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(xoaYeuThich(item))}>
            <Text style={styles.heart}>💔</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#555' },
  item: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ten: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sdt: {
    fontSize: 14,
    color: '#333',
  },
  heart: {
    fontSize: 22,
    padding: 5,
    color: 'red',
  },
});

