import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import {setOrigin, setDestination, selectOrigin} from '../store/slice/navSlice';

const HomeScreenContainer = () => {
  const origin = useSelector(selectOrigin);

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
  return (
    <HomeScreen
      handleSearchPlacesClick={handleSearchPlacesClick}
      origin={origin}
    />
  );
};

export default HomeScreenContainer;
