import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function StudentInfo() {
  return (
    <View style={styles.row}>
      <Pressable 
        accessibilityRole="imagebutton"
        accessibilityLabel="Ảnh đại diện"
        accessibilityHint="Nhấn để xem ảnh"
        accessibilityState={{ disabled: false }}
        hitSlop={10} 
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} 
      >
        <Image
          source={{ uri: 'https://ui-avatars.com/api/?name=SV&background=cce0ff&color=1976D2&rounded=true' }}
          style={styles.avatar}
        />
      </Pressable>
      
      <View>
        <Text style={styles.name}>Nguyễn Đức Trung</Text>
        <Text>Mã SV: 23687791</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 70, height: 70, marginRight: 15 },
  name: { fontSize: 18, fontWeight: 'bold' }
});