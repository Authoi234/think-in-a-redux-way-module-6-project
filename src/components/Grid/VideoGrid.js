import React, { useEffect } from 'react';
import VideoGridItem from './VideoGridItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/Videos/VideosSlice';
import Loading from '../ui/Loading';

const VideoGrid = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, error, isError } = useSelector(state => state.videos);
    const {tags, search} = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchVideos({tags, search}));
    }, [dispatch, tags, search]);

    let content;

    if (isLoading) content = <Loading />
    if (isError && !isLoading) content = <div className="col-span-12 font-semibold text-red-500">{error}</div>
    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12 font-semibold">No videos Found</div>
    }
    if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map(video =>  <VideoGridItem key={video.id} video={video} ></VideoGridItem>)
    }

    return (
        <section className="">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;