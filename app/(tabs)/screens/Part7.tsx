import React from 'react';
import { StatusBar, View, Text, StyleSheet, Platform, useWindowDimensions, TouchableOpacity, Animated } from 'react-native';

const Part7 = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const statusBarBackgroundColor = Platform.OS === 'ios' ? 'blue' : 'green';
  const statusBarStyle = isLandscape ? 'light-content' : 'dark-content';

  // Tạo biến động cho việc nhấn nút
  const animatedScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      <Text style={styles.text}>Bạn đang dùng thiết bị {Platform.OS === 'ios' ? 'iOS' : 'Android'} trong {isLandscape ? 'chế độ ngang' : 'chế độ dọc'}</Text>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.7}
      >
        <Animated.View style={[styles.button, { transform: [{ scale: animatedScale }] }]}>
          <Text style={styles.buttonText}>Nhấn vào tôi</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#F0F8FF' : '#F5FFFA', // màu nền nhẹ nhàng
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Platform.OS === 'ios' ? '#007AFF' : '#3DDC84', // màu chữ theo nền tảng
    textAlign: 'center',
  },
  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347', // màu đỏ tươi
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // hiệu ứng đổ bóng trên Android
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Part7;
