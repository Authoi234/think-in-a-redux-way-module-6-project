import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/Videos/VideosSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/VideoSlice';
import relatedVideoReducer from '../features/relatedVideos/relatedVideosSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideoReducer, 
  },
});
