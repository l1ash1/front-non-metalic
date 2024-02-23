import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface IActionTabInitState {
  actionTab: number;
}

const initialState: IActionTabInitState = {
  actionTab: 0,
};

const commonFlags = createSlice({
  name: 'commonFlags',
  initialState,
  reducers: {
    setActionTab(state, action: PayloadAction<number>) {
      state.actionTab = action.payload;
    },
  },
});

export const { setActionTab } = commonFlags.actions;
export const selectedActionTab = (state: RootState) =>
  state.commonFlags.actionTab;

export default commonFlags;
