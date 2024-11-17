import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Tags from './../components/Tags/Tags';
import VideoGrid from './../components/Grid/VideoGrid';
import Pagination from './../components/ui/Pagination';
import Footer from '../components/Footer';

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