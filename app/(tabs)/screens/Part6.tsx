import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Part6 = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.deviceText}>
        Bạn đang dùng thiết bị {Platform.OS === 'ios' ? 'iOS' : 'Android'} phải không .Tôi biết hết đấy 
      </Text>
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
      ios: '#007AFF',
      android: '#3DDC84',
    }),
    borderRadius: Platform.OS === 'ios' ? 10 : 5,
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0,
    elevation: Platform.OS === 'android' ? 4 : 0,
    marginTop: Platform.select({
      ios: 50,
      android: 20,
    }),
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 18 : 16,
    fontWeight: Platform.OS === 'ios' ? '600' : '400',
    color: Platform.OS === 'ios' ? '#FFFFFF' : '#000000',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    lineHeight: Platform.OS === 'ios' ? 24 : 20,
  },
  deviceText: {
    fontSize: 16,
    color: Platform.OS === 'ios' ? '#FFFFFF' : '#000000',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    width: Platform.OS === 'ios' ? 200 : 180,
    height: Platform.OS === 'ios' ? 50 : 45,
    borderColor: Platform.OS === 'ios' ? '#007AFF' : '#3DDC84',
    borderWidth: Platform.OS === 'ios' ? 2 : 1,
  },
});

export default Part6;
