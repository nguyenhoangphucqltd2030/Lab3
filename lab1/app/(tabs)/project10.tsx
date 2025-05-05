import { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import Item from './Item'; // nhớ chỉnh đúng đường dẫn nha

export default function Project10() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  const deleteItem = (indexToDelete: number) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Item title={item} onDelete={() => deleteItem(index)} />
        )}
      />
    </View>
  );
}
