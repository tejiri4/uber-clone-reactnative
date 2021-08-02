import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

// create slice
export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

const {reducer, actions} = navSlice;

// reducer
export const navSliceReducer = reducer;

// actions
export const {setOrigin, setDestination, setTravelTimeInformation} = actions;

// selectors
export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInformation = state =>
  state.nav.travelTimeInformation;
