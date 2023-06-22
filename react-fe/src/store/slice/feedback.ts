import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const getFeedbackList = createAsyncThunk('getFeedbackList', async () => {
  try {
		const result = await axios.get('http://localhost:3000/feedback/score')
		return result.data
	} catch (err) {
		console.log(err)
	}
})

export const feedbackScoreSlice = createSlice({
	name: 'feedbackScore',
	initialState: {
    selectedScore: null as Number | null,
		isSubmitted: false as boolean,
		feedbackList: [] as Array<number>
  },
	reducers: {
		userSelectScore: (state, action) => {
      state.selectedScore = action.payload
			state.isSubmitted = false
		},
		setIsSubmitted: (state, action) => {
			state.isSubmitted = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getFeedbackList.fulfilled, (state, action) => {
      state.feedbackList = action.payload
    })
	},
});




export const { userSelectScore, setIsSubmitted } = feedbackScoreSlice.actions;

export default feedbackScoreSlice.reducer;