import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Sắp xếp theo hàng ngang
    justifyContent: 'space-around', // Khoảng cách đều nhau giữa các box
    alignItems: 'center', // Căn giữa theo chiều dọc
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#f0c0f9', // Màu nền của box
    justifyContent: 'center', // Căn chữ vào giữa box (theo chiều dọc)
    alignItems: 'center', // Căn chữ vào giữa box (theo chiều ngang)
  },
});

const Square = ({ text }: { text: string }) => (
  <View style={styles.box}>
    <Text>{text}</Text>
  </View>
);

export default function project5() {
  return (
    <View style={styles.container}>
      <Square text="Buồn" />
      <Square text="Vui" />
      <Square text="Xui" />
      <Square text="Tình" />
    </View>
  );
}
