import React from 'react';
import {useDispatch} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import {setOrigin, setDestination} from '../store/slice/navSlice';

const HomeScreenContainer = () => {
  const dispatch = useDispatch();

  const handleSearchPlacesClick = (data, details) => {
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      }),
    );

    dispatch(setDestination(null));
  };
  return <HomeScreen handleSearchPlacesClick={handleSearchPlacesClick} />;
};

export default HomeScreenContainer;
