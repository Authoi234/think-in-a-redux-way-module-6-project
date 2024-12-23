import React from 'react';
import { Link } from 'react-router-dom';

const VideoGridItem = ({video}) => {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03] py-5 px-1 shadow shadow-2xl ">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/videos/${video.id}`}>
                        <img src={video.thumbnail} className="w-full h-auto"
                            alt="Some video title" />
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        {video.duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <Link to={`/videos/${video.id}`} className="shrink-0">
                        <img src={video.avatar}
                            className="rounded-full h-6 w-6" alt="Learn with Sumit" />
                    </Link>

                    <div clas="flex flex-col">
                        <Link to={`/videos/${video.id}`}>
                            <p className="text-black text-base font-semibold">
                                {video.title}
                            </p>
                        </Link>
                        <Link className="text-gray-700 duration-300 text-sm mt-2 hover:text-gray-600" to={`/videos/${video.id}`}>
                            {video.author}
                        </Link>
                        <p className="text-gray-700 text-sm mt-1">
                            {video.views} views . {video.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGridItem;