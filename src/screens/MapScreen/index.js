import React from 'react';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../../modules/map/RideMap';

const MapScreen = ({origin}) => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map origin={origin} />
      </View>
      <View style={tw`h-1/2`} />
    </View>
  );
};

export default MapScreen;
