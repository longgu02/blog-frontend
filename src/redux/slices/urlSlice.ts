import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  prevUrl: string
}

const initialState: CounterState = {
  prevUrl: '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPrevUrl: (state, action: PayloadAction<string>) => {
      state.prevUrl = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPrevUrl } = counterSlice.actions

export default counterSlice.reducer
