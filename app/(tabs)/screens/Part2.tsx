import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Part2 = () => {
  // Lấy chiều rộng của màn hình hiện tại
  const screenWidth = Dimensions.get('window').width;

  // Thiết lập độ rộng của hình ảnh bằng 80% chiều rộng màn hình
  const imageWidth = screenWidth * 0.8;

  // Giả sử tỷ lệ khung hình là 16:9 (có thể thay đổi theo hình ảnh cụ thể)
  const imageHeight = imageWidth * (9 / 16);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/c5/40/01/c540018ca1c7b93cb1fbc218ea0c73a7.jpg' }} 
        style={{ width: imageWidth, height: imageHeight }}
        resizeMode="contain" // Giữ nguyên tỷ lệ hình ảnh
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Part2;
