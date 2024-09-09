import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Part6 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Platform Specific Styling!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
    backgroundColor: Platform.select({
      ios: '#007AFF', // màu xanh đặc trưng của iOS
      android: '#3DDC84', // màu xanh lá của Android
    }),
    borderRadius: Platform.OS === 'ios' ? 10 : 5,  // bo góc nhẹ cho iOS, ít hơn cho Android
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent', // đổ bóng cho iOS, không đổ bóng cho Android
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0, // độ mờ của bóng trên iOS
    elevation: Platform.OS === 'android' ? 4 : 0,  // nâng cao để tạo hiệu ứng đổ bóng trên Android
    marginTop: Platform.select({
      ios: 50,  // khoảng cách trên cùng lớn hơn trên iOS
      android: 20,  // khoảng cách trên cùng nhỏ hơn trên Android
    }),
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 18 : 16,
    fontWeight: Platform.OS === 'ios' ? '600' : '400', // trọng lượng chữ đậm hơn trên iOS
    color: Platform.OS === 'ios' ? '#FFFFFF' : '#000000',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    lineHeight: Platform.OS === 'ios' ? 24 : 20, // khoảng cách giữa các dòng văn bản
  },
  button: {
    width: Platform.OS === 'ios' ? 200 : 180, // chiều rộng lớn hơn trên iOS
    height: Platform.OS === 'ios' ? 50 : 45,  // chiều cao cho iOS
    borderColor: Platform.OS === 'ios' ? '#007AFF' : '#3DDC84',
    borderWidth: Platform.OS === 'ios' ? 2 : 1,
  },
});

export default Part6;
