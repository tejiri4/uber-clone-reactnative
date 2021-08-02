import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind-react-native-classnames';

AntIcon.loadFont();

const data = [
  {
    id: 123,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={tw`m-2 pl-6 pb-8 pt-4 bg-gray-200 w-40`}
          onPress={() => navigation.navigate(item.screen)}>
          <View>
            <Image source={{uri: item.image}} style={styles.navIcon} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`mt-4 bg-black p-2 rounded-full w-10`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  navIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default NavOptions;
