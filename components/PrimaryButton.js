import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>   
        pressed     // pressed가 true일 때 스타일을 적용
            ? [styles.buttonInnerContainer, styles.pressed] // pressed일 때 스타일
            : styles.buttonInnerContainer   // pressed가 아닐 때 스타일
        }
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden', // 자식 컴포넌트가 부모 컴포넌트를 벗어나는 부분을 숨김
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
