import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SmartCampus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976D2',
    padding: 20,
    paddingTop: 45,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  }
});