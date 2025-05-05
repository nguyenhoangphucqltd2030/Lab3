import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DanhBa from '../../man_hinh/DanhBa';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

// 👇 Kiểu khai báo route
type RootDrawerParamList = {
  'danh-ba': undefined;
  'yeu-thich': undefined;
  'nguoi-dung': undefined;
  'cai-dat': undefined;
};

export default function DanhBaScreen() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Danh Bạ',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DanhBa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
