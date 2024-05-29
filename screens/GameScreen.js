import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Alert } from 'react-native';

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

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber); // 랜덤 숫자 생성
  const [currentGuess, setCurrentGuess] = useState(initialGuess); // 랜덤 숫자 생성

  const nextGuessHandler = (direction) => {   // direction : 'lower' or 'higher'
    if(direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess > userNumber){
      Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!', style: 'cancel'}])
      return; // 사용자가 선택한 숫자보다 낮은 경우에는 더 낮은 숫자를 선택할 수 없음
    }
    if(direction === 'lower') { // 사용자가 선택한 숫자보다 낮은 경우
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary)    
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess); // 새로운 랜덤 숫자 생성
    setCurrentGuess(newRndNumber);   // 새로운 랜덤 숫자 생성
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUND */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1, // 전체 공간 사용
    padding: 24, // padding
  },
});
