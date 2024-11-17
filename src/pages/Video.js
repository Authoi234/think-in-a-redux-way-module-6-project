import React, { useEffect } from 'react';
import RelatedVideoList from '../components/list/RelatedVideoList';
import Player from '../components/Description/Player';
import VideoDescription from '../components/Description/VideoDescription';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchVideo } from '../features/video/VideoSlice';
import { useParams } from 'react-router-dom';
import Loading from '../components/ui/Loading';

const Video = () => {
    const dispatch = useDispatch();
    const { videoId } = useParams();
    const { video, isLoading, isError, error } = useSelector(state => state.video);

    useEffect(() => {
        dispatch(fetchVideo(videoId));
    }, [dispatch, videoId]);

    let content = null;

    if (isLoading) content = <Loading></Loading>

    if (!isLoading && isError) content = <div className='col-span-12 text-red-500 font-semibold'>{error}</div>

    if (!isLoading && !isError && !video?.id) content = <div className="col-span-12 font-semibold">No videos Found</div>

    if (!isLoading && !isError && video?.id) content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
            <Player title={video?.title} link={video?.link} />

            <VideoDescription video={video}></VideoDescription>
        </div>

        <RelatedVideoList currentVideoId={video?.id} tags={video?.tags} />
    </div>

    return (
        <>

            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                   {content}
                </div>
            </section>
        </>
    );
};

export default Video;