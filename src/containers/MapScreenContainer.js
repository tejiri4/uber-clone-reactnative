import React from 'react';
import {useSelector} from 'react-redux';
import MapScreen from '../screens/MapScreen';
import {selectOrigin} from '../store/slice/navSlice';

const MapScreenContainer = () => {
  const origin = useSelector(selectOrigin);
  return <MapScreen origin={origin} />;
};

export default MapScreenContainer;
