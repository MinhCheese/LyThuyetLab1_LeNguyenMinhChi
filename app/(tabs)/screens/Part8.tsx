import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Image, StyleSheet, KeyboardAvoidingView, Platform, useWindowDimensions } from 'react-native';

const Part8 = () => {
  const [isPortrait, setIsPortrait] = useState(true);
  const { width, height } = useWindowDimensions();

  // Hàm kiểm tra hướng màn hình
  const checkOrientation = () => {
    return height >= width;
  };

  // Cập nhật trạng thái khi hướng màn hình thay đổi
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(checkOrientation());
    };

    // Cập nhật trạng thái khi component được mount
    handleOrientationChange();

    // Không cần thêm sự kiện lắng nghe, vì useWindowDimensions tự động cập nhật
  }, [width, height]);

  // Tính toán chiều rộng và chiều cao của hình ảnh dựa trên hướng màn hình
  const imageWidth = width * 0.8;
  const imageHeight = isPortrait ? imageWidth * (9 / 16) : imageWidth * (3 / 16); // Giảm chiều cao trong chế độ ngang

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Điều chỉnh khoảng cách khi bàn phím xuất hiện
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/c5/40/01/c540018ca1c7b93cb1fbc218ea0c73a7.jpg' }} 
          style={{ width: imageWidth, height: imageHeight }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text here"
        />
      </View>
      <View
        style={[
          styles.buttonContainer,
          isPortrait ? styles.portraitButtonContainer : styles.landscapeButtonContainer,
        ]}
      >
        <Button title="Button 1" onPress={() => {}} />
        <Button title="Button 2" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20, // Khoảng cách giữa hình ảnh và các thành phần khác
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  portraitButtonContainer: {
    flexDirection: 'column',
    height: 120,
  },
  landscapeButtonContainer: {
    flexDirection: 'row',
    height: 60,
  },
});

export default Part8;
