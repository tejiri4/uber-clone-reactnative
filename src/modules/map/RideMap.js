import React from 'react';
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import PinMarker from './markers/Pin';

const Map = ({origin}) => {
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin?.location && (
        <PinMarker
          latitude={origin.location.lat}
          longitude={origin.location.lng}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
