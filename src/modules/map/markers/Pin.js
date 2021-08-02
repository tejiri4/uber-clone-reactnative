import React from 'react';
import {Marker} from 'react-native-maps';

const PinMarker = ({latitude, longitude, title, description, identifier}) => {
  return (
    <Marker
      coordinate={{
        latitude,
        longitude,
      }}
      title={title}
      description={description}
      identifier={identifier}
    />
  );
};

export default PinMarker;
