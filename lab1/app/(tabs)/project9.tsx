import { SectionList, Text } from 'react-native';

const DATA = [
  { title: 'A', data: ['Apple', 'Avocado'] },
  { title: 'B', data: ['Banana', 'Blueberry'] },
  { title: 'c', data: ['Coconut', 'Coc'] },
];

export default function Project9() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Text style={{ paddingLeft: 20 }}>{item}</Text>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', backgroundColor: '#eee' }}>{title}</Text>
      )}
    />
  );
}
