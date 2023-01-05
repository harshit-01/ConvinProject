import { createSlice } from '@reduxjs/toolkit'
import { fetchUserDetails,fetchSingleUserDetails } from './action';

const initialState = {
  data: [],
  singleUser: {},
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    })
    builder.addCase(fetchSingleUserDetails.fulfilled,(state, action) => {
      state.singleUser = action.payload;
    })
  },
})

// // Action creators are generated for each case reducer function
// export const { extractData } = counterSlice.actions

export default counterSlice.reducer