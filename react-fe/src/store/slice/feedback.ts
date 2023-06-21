import { createSlice } from '@reduxjs/toolkit';

export const feedbackScoreSlice = createSlice({
	name: 'feedbackScore',
	initialState: {
    selectedScore: null
  },
	reducers: {
		userSelectScore: (state, action) => {
      console.log(state)
      console.log(action)
      state.selectedScore = action.payload
			// state = action
		},

	},
});


export const { userSelectScore } = feedbackScoreSlice.actions;

export default feedbackScoreSlice.reducer;