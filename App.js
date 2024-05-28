import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState(); // 사용자가 선택한 숫자

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber); // 사용자가 선택한 숫자 저장
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />; // 시작 화면

  if (userNumber) {
    screen = <GameScreen />; // 게임 화면
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/dice.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // 화면 전체를 차지
    // backgroundColor: '#ddb52f', // 배경색
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
