import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';

const SearchPlaces = ({onSearchPlacesSelected}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Where from?"
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={(data, details = null) => {
        onSearchPlacesSelected(data, details);
      }}
      returnKeyType="search"
      fetchDetails={true}
      enablePoweredByContainer={false}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      minLength={2}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default SearchPlaces;
