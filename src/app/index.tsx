import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import StudentInfo from '../components/StudentInfo';
import CustomButton from '../components/CustomButton';

export default function Index() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.scroll}>
        <StudentInfo />

        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Tìm kiếm thông tin..."
        />

        <View style={styles.infoBox}>
          <Text style={styles.boldText}>Thông tin sinh viên</Text>
          <Text>Email: trung.nd@sv.edu.vn</Text>
          <Text>Lớp: DHDTMT18A</Text>
        </View>
        <CustomButton isDisabled={text === ''} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scroll: { padding: 20 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 20 
  },
  infoBox: { 
    backgroundColor: '#eef5fd', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 20 
  },
  boldText: { fontWeight: 'bold', marginBottom: 5 }
});