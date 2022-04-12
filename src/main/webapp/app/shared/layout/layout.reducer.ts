/*
 * © Copyright InfoPlus 2021.
 *
 * @Author: nguyenminhcuong
 * @Date: 2021-09-19 17:42:57
 * @Project: InfoCity
 */

import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from 'app/config/constant/constants';

const initialState = {
  theme: THEMES.DARK,
  collapsed: false,
};

export type LayoutState = Readonly<typeof initialState>;

// Actions

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState: initialState as LayoutState,
  reducers: {
    reset() {
      return initialState;
    },
    changeTheme(state) {
      const them = THEMES.DARK === state.theme ? THEMES.LIGHT : THEMES.DARK;
      return {
        ...state,
        theme: them,
      };
    },
    collapsed(state, action) {
      return {
        ...state,
        collapsed: action.payload,
      };
    },
  },
});

export const { reset, changeTheme, collapsed } = LayoutSlice.actions;

// Reducer
export default LayoutSlice.reducer;
