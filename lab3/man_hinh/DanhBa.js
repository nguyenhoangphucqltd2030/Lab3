import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { layDanhBa } from '../tien_ich/goiAPI';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { themYeuThich } from '../store';
import { Avatar } from 'react-native-elements';

const DanhBa = () => {
  const [danhBa, setDanhBa] = useState([]);
  const [dangTai, setDangTai] = useState(true);
  const [loi, setLoi] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const dsYeuThich = useSelector((state) => state.danhBa.yeuThich);

  useEffect(() => {
    layDanhBa()
      .then(data => {
        setDanhBa(data);
        setDangTai(false);
      })
      .catch(error => {
        setLoi(true);
        setDangTai(false);
      });
  }, []);

  if (dangTai) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  if (loi) {
    return <Text style={styles.text}>Lỗi khi tải dữ liệu</Text>;
  }

  const daYeuThich = (sdt) => dsYeuThich.some(y => y.phone === sdt);

  return (
    <FlatList
      data={danhBa}
      keyExtractor={(item) => item.phone}
      renderItem={({ item }) => {
        const daYeu = daYeuThich(item.phone);
        return (
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
          >
            <View style={styles.item}>
              <Avatar
                rounded
                title={item.name.first[0] + item.name.last[0]}
                containerStyle={styles.avatar}
              />
              <View style={styles.info}>
                <Text style={styles.ten}>{item.name.first} {item.name.last}</Text>
                <Text style={styles.sdt}>{item.phone}</Text>
                {daYeu && <Text style={styles.nhanYeuThich}>💖 Đã yêu thích</Text>}
              </View>
              <TouchableOpacity onPress={() => dispatch(themYeuThich(item))}>
                <Text style={styles.heart}>{daYeu ? '💖' : '🤍'}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  avatar: {
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  ten: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sdt: {
    fontSize: 14,
    color: '#1E90FF',
  },
  nhanYeuThich: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
  heart: {
    fontSize: 22,
    paddingLeft: 10,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
  },
});

export default DanhBa;
