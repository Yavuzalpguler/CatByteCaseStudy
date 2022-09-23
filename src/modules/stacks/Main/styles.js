import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../../constants/StyleVariables';
const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    height: '10%',
    alignSelf: 'center',
    marginTop: heightPercentage(5),
    color: 'white',
    fontSize: widthPercentage(4),
    backgroundColor: 'rgba(59, 88, 152, 0.5)',
  },
});
export default styles;
