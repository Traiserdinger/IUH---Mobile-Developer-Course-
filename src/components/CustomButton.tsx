import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function CustomButton({ isDisabled }: { isDisabled: boolean }) {
  return (
    <Pressable
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel="Nút lưu hồ sơ"
      accessibilityHint="Lưu thông tin"
      accessibilityState={{ disabled: isDisabled }}
      style={({ pressed }) => [
        styles.button,
        isDisabled ? styles.bgDisabled : (pressed ? styles.bgPressed : styles.bgNormal)
      ]}
    >
      <Text style={styles.text}>LƯU HỒ SƠ</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  bgNormal: { backgroundColor: '#1976D2' },
  bgPressed: { 
    backgroundColor: '#115293', 
    transform: [{ scale: 0.95 }]
  },
  bgDisabled: { backgroundColor: '#cccccc' },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});