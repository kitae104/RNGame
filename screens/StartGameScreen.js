import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState(''); // 입력한 숫자

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, '')); // 숫자 이외의 문자를 제거
  };

  const resetInputHandler = () => {
    setEnteredNumber(''); // 입력한 숫자 초기화
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber); // 입력한 숫자를 정수로 변환

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        '잘못된 숫자!',
        '숫자는 반드시 1 에서 99 사이의 값이어야 합니다.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }],
      ); // 잘못된 숫자
      return;
    }

    onPickNumber(chosenNumber); // 사용자가 선택한 숫자 전달
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1, // 가능한 공간을 모두 차지
    marginTop: 100, // 위쪽으로 100px 이동
    alignItems: 'center', // 수평 정렬
  },    
  numberInput: {
    height: 50, // 높이 50px
    width: 50, // 너비 50px
    fontSize: 32, // 글자 크기 32px
    borderBottomColor: Colors.accent500, // 아래 테두리 색
    borderBottomWidth: 2, // 아래 테두리 두께
    color: Colors.accent500, // 글자 색
    marginVertical: 8, // 상하 여백 8px
    fontWeight: 'bold', // 글자 굵게55555
    textAlign: 'center', // 가운데 정렬
  },
  buttonsContainer: {
    flexDirection: 'row', // 수평 정렬
  },
  buttonContainer: {
    flex: 1, // 가능한 공간을 모두 차지
  },
});
