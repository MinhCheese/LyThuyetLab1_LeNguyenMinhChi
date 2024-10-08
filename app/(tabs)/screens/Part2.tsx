import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { ScaledSize } from 'react-native';

const Part2 = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const updateDimensions = ({ window }:any) => {
      setDimensions(window);
    };

    // Thêm sự kiện thay đổi kích thước màn hình
    const subscription = Dimensions.addEventListener('change', updateDimensions);

    // Cleanup khi component unmount
    return () => {
      subscription?.remove(); // Sử dụng phương thức remove() đúng cách
    };
  }, []);

  // Tính toán kích thước hình ảnh
  const imageAspectRatio = 16 / 9;
  const imageWidth = dimensions.width * 0.8; // 80% chiều rộng màn hình
  const imageHeight = imageWidth / imageAspectRatio;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://i.pinimg.com/736x/c5/40/01/c540018ca1c7b93cb1fbc218ea0c73a7.jpg'}} 
        style={{
          width: imageWidth,
          height: imageHeight,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Part2;