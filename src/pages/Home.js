import React from 'react';
import Tags from './../components/Tags/Tags';
import VideoGrid from './../components/Grid/VideoGrid';
import Pagination from './../components/ui/Pagination';

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    );
};

export default Home;