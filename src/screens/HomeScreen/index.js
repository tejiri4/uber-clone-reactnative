import React from 'react';
import {View, Image, SafeAreaView, StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../../modules/mortar-ui/NavOptions';
import SearchPlaces from '../../modules/mortar-ui/SearchPlaces';

const HomeScreen = ({handleSearchPlacesClick, origin}) => {
  const data = [
    {
      id: 123,
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
      disabled: !origin?.location,
    },
    {
      id: '456',
      title: 'Order Food',
      image: 'https://links.papareact.com/28w',
      screen: 'EatsScreen',
      disabled: true,
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            url: 'https://links.papareact.com/gzs',
          }}
        />
        <SearchPlaces onSearchPlacesSelected={handleSearchPlacesClick} />
        <NavOptions data={data} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
