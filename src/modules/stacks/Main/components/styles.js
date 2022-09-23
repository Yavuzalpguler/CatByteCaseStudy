import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  imageContainer: {
    width: widthPercentage(40),
    height: widthPercentage(40),
    borderRadius: widthPercentage(3),
    alignItems: 'center',
  },
  imageOverlay: {
    width: widthPercentage(35),
    height: widthPercentage(5),
    flexDirection: 'row',

    backgroundColor: 'rgba(70,0,0,0.9)',
    borderRadius: widthPercentage(3),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: widthPercentage(1),
  },
});
export default styles;
