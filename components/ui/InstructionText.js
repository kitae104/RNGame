import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans', // 글꼴
    color: Colors.accent500, // 글자 색
    fontSize: 24, // 글자 크기 24px
  },
});
