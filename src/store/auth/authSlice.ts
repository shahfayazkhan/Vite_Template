import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface userState {
  userData: any;
}

const initialState: userState = {
  userData: null,
};

const sliceSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: userState, action: PayloadAction<userState>) => {
      return { ...state, userData: action.payload };
    },
  },
});

export const { setUser } = sliceSlice.actions;

export const selectUserData = (state: RootState) => state.auth.userData;

export default sliceSlice.reducer;
