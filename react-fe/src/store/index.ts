import { configureStore } from '@reduxjs/toolkit';
import feedbackSlice from './slice/feedback';

export default configureStore({
	reducer: {
		feedbackSlice: feedbackSlice
	},
});