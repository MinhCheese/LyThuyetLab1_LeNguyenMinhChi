import React from 'react';
import { StatusBar, View, Text, StyleSheet, Platform, useWindowDimensions } from 'react-native';

const Part7 = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  // Xác định màu nền và kiểu chữ dựa trên nền tảng và hướng màn hình
  const statusBarBackgroundColor = Platform.OS === 'ios' ? 'blue' : 'green';
  const statusBarStyle = isLandscape ? 'light-content' : 'dark-content';

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Part7;
