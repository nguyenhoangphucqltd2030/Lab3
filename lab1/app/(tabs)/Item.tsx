import { View, Text, Button } from 'react-native';

export default function Item({ title, onDelete }: { title: string; onDelete: () => void }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={{ flex: 1 }}>{title}</Text>
      <Button title="Xóa" onPress={onDelete} />
    </View>
  );
}

