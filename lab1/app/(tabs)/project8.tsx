import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 50 }, (_, i) => ({
  key: `${i}`,
  name: `Item ${i + 1}`,
}));

export default function Project8() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
