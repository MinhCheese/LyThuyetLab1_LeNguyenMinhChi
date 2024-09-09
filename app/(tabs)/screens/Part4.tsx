import React from 'react';
import { View, Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const Part4 = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        {/* Các thành phần khác */}
        <TextInput
          style={styles.input}
          placeholder="Nhập nội dung..."
        />
        <Button title="Gửi" onPress={() => { /* Logic khi nhấn nút */ }} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default Part4;
