import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {widthPercentage} from '../../../../../constants/StyleVariables';
const MainDetail = props => {
  const {route} = props;
  const {item} = route.params;

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const renderItemDetails = (header, data) => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginLeft: widthPercentage(4),
          flexDirection: 'row',
          marginTop: widthPercentage(2),
          width: widthPercentage(60),
        }}>
        <Text
          style={{
            fontSize: widthPercentage(5.2),
            fontWeight: 'bold',
            alignSelf: 'baseline',
          }}>
          {header}:
        </Text>

        <Text
          style={{
            fontSize: widthPercentage(4),
            alignSelf: 'baseline',
            fontWeight: '400',
            marginLeft: widthPercentage(2),
          }}>
          {data}
        </Text>
      </View>
    );
  };

  const renderUserImage = () => {
    return (
      <FastImage
        style={[styles.imageContainer, {backgroundColor: generateColor()}]}
        source={{
          uri: item?.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}>
        {renderBackButton()}
      </FastImage>
    );
  };

  const renderCompanyDetails = () => {
    return (
      <View
        style={{marginTop: widthPercentage(6), marginLeft: widthPercentage(4)}}>
        <Text
          style={{
            fontSize: widthPercentage(5.2),
            fontWeight: 'bold',
            alignSelf: 'baseline',
          }}>
          Company Details
        </Text>
        {renderItemDetails(
          'Address',
          item?.company?.address?.address + ' ' + item?.company?.address?.city,
        )}
        {renderItemDetails('Postal Code', item?.company?.address?.postalCode)}
        {renderItemDetails('State', item?.company?.address?.state)}
      </View>
    );
  };

  const renderBackButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff80',
          width: widthPercentage(10),
          height: widthPercentage(10),
          borderRadius: widthPercentage(5),
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: widthPercentage(12),
          left: widthPercentage(5),
        }}
        onPress={() => props.navigation.goBack()}>
        <Text style={{color: 'black', fontSize: 20}}>{'<'}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {renderUserImage()}
      {renderItemDetails('Address', item.address.address)}
      {renderItemDetails('FirstName', item.firstName)}
      {renderItemDetails('Last Name', item.lastName)}
      {renderItemDetails('Age', item.age)}
      {renderCompanyDetails()}
    </View>
  );
};

export default MainDetail;
