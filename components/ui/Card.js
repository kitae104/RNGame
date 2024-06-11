import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children}) => {
    return (
        <View style={styles.card}>{children}</View>
    );
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({    
    card: {
      justifyContent: 'center', // 수직 정렬
      alignItems: 'center', // 수평 정렬
      //flex: 1,            // 가능한 공간을 모두 차지
      marginTop: deviceWidth < 380 ? 18 : 36, // 위쪽으로 100px 이동
      marginHorizontal: 24, // 좌우 여백 24px
      padding: 16, // 내부 공백 16px
      backgroundColor: Colors.primary800, // 배경색
      borderRadius: 8, // 모서리 둥글게
  
      // Android
      elevation: 4, // 그림자(only Android)
  
      // iOS
      shadowColor: 'black', // 그림자 색
      shadowOffset: { width: 0, height: 2 }, // 그림자 위치
      shadowRadius: 6, // 그림자 반경
      shadowOpacity: 0.25, // 그림자 투명도
    },
});