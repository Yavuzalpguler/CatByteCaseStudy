import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getUserInfo, updateMainCustomState} from '../+store/Main/Main.action';
import useGetStoreValues from '../../../common/useGetStoreValues';
import {useSelector} from 'react-redux';
import UserItem from './components/UserItem';
import {
  heightPercentage,
  widthPercentage,
} from '../../../constants/StyleVariables';
import styles from './styles';
const MainScreen = props => {
  const dispatch = useDispatch();
  const [isAddUserShow, setIsAddUserShow] = useState(false);
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUserAge, setNewUserAge] = useState('');
  const [newUserImage, setNewUserImage] = useState('');
  const userInfo = useSelector(state => state.main.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const handleUserItemClick = item => {
    props.navigation.navigate('MainDetail', {item});
  };

  const addUserButton = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: widthPercentage(10),
          alignSelf: 'center',
          backgroundColor: 'red',
          width: widthPercentage(50),
          height: widthPercentage(10),
          borderRadius: widthPercentage(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setIsAddUserShow(prev => !prev);
        }}>
        <Text
          style={{
            fontSize: widthPercentage(4),
            color: 'white',
          }}>
          Add User
        </Text>
      </TouchableOpacity>
    );
  };

  const addUserView = () => {
    return (
      <View
        style={{
          width: '70%',
          height: '60%',
          backgroundColor: 'gray',
          position: 'absolute',
          alignSelf: 'center',
          borderRadius: widthPercentage(10),
          top: heightPercentage(25),
        }}>
        {closeView()}
        <TextInput
          selectionColor={'rgba(59, 88, 152, 0.5)'}
          placeholder={'First Name'}
          placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          style={[styles.textInput]}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setNewUserFirstName(text)}
        />
        <TextInput
          selectionColor={'rgba(59, 88, 152, 0.5)'}
          placeholder={'Last Name'}
          placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          style={[styles.textInput]}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setNewUserLastName(text)}
        />
        <TextInput
          selectionColor={'rgba(59, 88, 152, 0.5)'}
          placeholder={'Age'}
          placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          style={[styles.textInput]}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setNewUserAge(text)}
        />
        <TextInput
          selectionColor={'rgba(59, 88, 152, 0.5)'}
          placeholder={'Image URL'}
          placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
          style={[styles.textInput]}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={text => setNewUserImage(text)}
        />

        <TouchableOpacity
          style={{
            width: '70%',
            height: '10%',
            alignSelf: 'center',
            marginTop: heightPercentage(5),
            backgroundColor: 'red',
            borderRadius: widthPercentage(10),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(
              updateMainCustomState('userInfo', {
                users: [
                  {
                    id: userInfo.users.length + 1,
                    firstName: newUserFirstName,
                    lastName: newUserLastName,
                    age: newUserAge,
                    image: newUserImage,
                  },
                  ...userInfo.users,
                ],
              }),
            );

            setIsAddUserShow(prev => !prev);
          }}>
          <Text
            style={{
              fontSize: widthPercentage(4),
              color: 'white',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleUserRemove = item => {
    dispatch(
      updateMainCustomState('userInfo', {
        users: userInfo.users.filter(user => user.id !== item.id),
      }),
    );
  };

  const closeView = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: widthPercentage(3.5),
          right: widthPercentage(4.5),
          backgroundColor: 'red',
          width: widthPercentage(6),
          height: widthPercentage(6),
          borderRadius: widthPercentage(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setIsAddUserShow(false)}>
        <Text style={{fontSize: widthPercentage(3), color: 'white'}}>X</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={userInfo?.users}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <UserItem
            item={item}
            onItemClick={handleUserItemClick}
            onUserRemove={handleUserRemove}
          />
        )}
        contentContainerStyle={{alignItems: 'center'}}
      />
      {isAddUserShow && addUserView()}
      {addUserButton()}
    </SafeAreaView>
  );
};

export default MainScreen;
