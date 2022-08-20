import React from 'react';
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import Player from './components/Player';
import axios from 'axios';

const dummy = [
    {
        id: 2,
        name: 'Zenith',
        artworkUrl:
            'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/zenith.jpeg',
        createdAt: '2022-08-20T02:13:29.038Z',
        updatedAt: '2022-08-20T02:13:29.038Z',
        artistId: 1,
        artist: {
            id: 1,
            name: 'Dexter Britain',
            createdAt: '2022-08-20T02:13:29.022Z',
            updatedAt: '2022-08-20T02:13:29.022Z',
        },
    },
    {
        id: 1,
        name: 'Creative Commons Volume 2',
        artworkUrl:
            'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/creative_commons_vol_2.jpeg',
        createdAt: '2022-08-20T02:13:29.034Z',
        updatedAt: '2022-08-20T02:13:29.034Z',
        artistId: 1,
        artist: {
            id: 1,
            name: 'Dexter Britain',
            createdAt: '2022-08-20T02:13:29.022Z',
            updatedAt: '2022-08-20T02:13:29.022Z',
        },
    },
    {
        id: 3,
        name: 'No Nations (Instrumentals)',
        artworkUrl:
            'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/no_nations.jpeg',
        createdAt: '2022-08-20T02:13:29.041Z',
        updatedAt: '2022-08-20T02:13:29.041Z',
        artistId: 2,
        artist: {
            id: 2,
            name: 'Jets Overhead',
            createdAt: '2022-08-20T02:13:29.029Z',
            updatedAt: '2022-08-20T02:13:29.029Z',
        },
    },
    {
        id: 5,
        name: 'The Slip',
        artworkUrl:
            'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/the_slip.jpeg',
        createdAt: '2022-08-20T02:13:29.047Z',
        updatedAt: '2022-08-20T02:13:29.047Z',
        artistId: 3,
        artist: {
            id: 3,
            name: 'Nine Inch Nails',
            createdAt: '2022-08-20T02:13:29.031Z',
            updatedAt: '2022-08-20T02:13:29.031Z',
        },
    },
    {
        id: 4,
        name: 'Ghosts I-IV',
        artworkUrl:
            'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/ghosts_i-iv.jpeg',
        createdAt: '2022-08-20T02:13:29.044Z',
        updatedAt: '2022-08-20T02:13:29.044Z',
        artistId: 3,
        artist: {
            id: 3,
            name: 'Nine Inch Nails',
            createdAt: '2022-08-20T02:13:29.031Z',
            updatedAt: '2022-08-20T02:13:29.031Z',
        },
    },
];

const Main = () => {
    const [albumList, setAlbumList] = React.useState([]);
    //run this once at the start
    React.useEffect(() => {
        axios.get('/api/albums').then(res => setAlbumList(res.data));
    }, []);

    return (
        <div id="main" className="row container">
            <Sidebar />
            <div className="container">
                <AllAlbums albumList={albumList} />
            </div>
            <Player />
        </div>
    );
};

export default Main;
