import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {widthPercentage} from '../../../../constants/StyleVariables';

const UserItem = ({item, onItemClick, onUserRemove}) => {
  const renderRemoveButton = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: widthPercentage(1.5),
          right: widthPercentage(1.5),
          backgroundColor: 'red',
          width: widthPercentage(6),
          height: widthPercentage(6),
          borderRadius: widthPercentage(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => onUserRemove(item)}>
        <Text style={{fontSize: widthPercentage(3), color: 'white'}}>X</Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'rgba(70,70,0,0.9)',
        margin: widthPercentage(2),
        padding: widthPercentage(2),
      }}
      onPress={() => onItemClick(item)}>
      <FastImage
        style={styles.imageContainer}
        source={{
          uri: item?.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}>
        {renderRemoveButton()}
        <View style={styles.imageOverlay}>
          <Text style={{color: 'white'}}>
            {item?.firstName} {item?.lastName}
          </Text>
          <Text style={{color: 'white', marginLeft: widthPercentage(1)}}>
            {item?.age}
          </Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

export default UserItem;
