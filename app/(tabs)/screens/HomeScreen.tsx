import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part1')}>
          <Text style={styles.emoji}>🌞</Text>
          <Text style={styles.buttonText}>Part 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part2')}>
          <Text style={styles.emoji}>🌍</Text>
          <Text style={styles.buttonText}>Part 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part3')}>
          <Text style={styles.emoji}>🍕</Text>
          <Text style={styles.buttonText}>Part 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part4')}>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={styles.buttonText}>Part 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part5')}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.buttonText}>Part 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part6')}>
          <Text style={styles.emoji}>🛠️</Text>
          <Text style={styles.buttonText}>Part 6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part7')}>
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.buttonText}>Part 7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part8')}>
          <Text style={styles.emoji}>🍷</Text>
          <Text style={styles.buttonText}>Part 8</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    margin: 10,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
