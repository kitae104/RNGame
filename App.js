import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(); // 사용자가 선택한 숫자
  const [gameIsOver, setGameIsOver] = useState(true); // 게임 종료 여부

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber); // 사용자가 선택한 숫자 저장
    setGameIsOver(false); // 게임 종료 여부 초기화
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />; // 시작 화면

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>; // 게임 화면
  }

  if (gameIsOver && userNumber){    // 게임 종료 화면(게임이 종료되었고 사용자가 숫자를 선택했을 때)
    screen = <GameOverScreen />
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
