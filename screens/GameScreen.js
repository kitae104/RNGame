import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const generateRandomBetween = (min, max, exclude) => {
  // 랜덤 숫자 생성 함수
  const randNum = Math.floor(Math.random() * (max - min)) + min; // min ~ max 사이의 랜덤 숫자 생성

  if (randNum === exclude) {
    // 생성된 숫자가 exclude와 같다면
    return generateRandomBetween(min, max, exclude); // 재귀 호출
  } else {
    return randNum; // 생성된 숫자 반환
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber); // 랜덤 숫자 생성
  const [currentGuess, setCurrentGuess] = useState(initialGuess); // 랜덤 숫자 생성
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      // 랜덤 숫자와 사용자가 선택한 숫자가 같다면
      onGameOver(); // 게임 종료
    }
  }, [currentGuess, userNumber, onGameOver]); // 랜덤 숫자와 사용자가 선택한 숫자가 변경될 때마다 실행

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    // direction : 'lower' or 'higher'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return; // 사용자가 선택한 숫자보다 낮은 경우에는 더 낮은 숫자를 선택할 수 없음
    }
    if (direction === 'lower') {
      // 사용자가 선택한 숫자보다 낮은 경우
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    ); // 새로운 랜덤 숫자 생성
    setCurrentGuess(newRndNumber); // 새로운 랜덤 숫자 생성
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1, // 전체 공간 사용
    padding: 24, // padding
  },
  instructionText: {
    marginBottom: 16, // 아래쪽으로 16px 이동
  },
  buttonsContainer: {
    flexDirection: 'row', // 수평 정렬
  },
  buttonContainer: {
    flex: 1, // 가능한 공간을 모두 차지
  },
});
