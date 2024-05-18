import { TextInput, View, Button, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,            // 가능한 공간을 모두 차지
    marginTop: 100, // 위쪽으로 100px 이동
    marginHorizontal: 24, // 좌우 여백 24px
    padding: 16, // 내부 공백 16px
    backgroundColor: "#72063c", // 배경색
    borderRadius: 8, // 모서리 둥글게

    // Android
    elevation: 4, // 그림자(only Android)

    // iOS
    shadowColor: "black", // 그림자 색
    shadowOffset: { width: 0, height: 2 }, // 그림자 위치
    shadowRadius: 6, // 그림자 반경
    shadowOpacity: 0.25, // 그림자 투명도
  },
  numberInput: {
    height: 50, // 높이 50px
    width: 50, // 너비 50px
    fontSize: 32, // 글자 크기 32px
    borderBottomColor: "#ddb52f", // 아래 테두리 색
    borderBottomWidth: 2, // 아래 테두리 두께
    color: "#ddb52f", // 글자 색
    marginVertical: 8, // 상하 여백 8px
    fontWeight: "bold", // 글자 굵게55555
    textAlign: "center", // 가운데 정렬
  },
});
