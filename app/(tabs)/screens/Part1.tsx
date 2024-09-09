import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const Part1 = () => {
  // Lấy chiều rộng của màn hình hiện tại
  const screenWidth = Dimensions.get('window').width;

  // Thiết lập độ rộng của mỗi nút bấm bằng một nửa chiều rộng màn hình
  const buttonWidth = screenWidth / 2;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="A" onPress={() => {}} />
      </View>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="B" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Đặt các nút bấm cạnh nhau
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Chiều cao toàn màn hình
  },
  buttonContainer: {
    margin: 10, // Khoảng cách giữa các nút bấm
  },
});

export default Part1;
