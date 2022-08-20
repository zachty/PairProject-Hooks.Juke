import React from 'react';
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';
import Player from './components/Player';
import axios from 'axios';

const Main = () => {
    //album list for all albums view
    const [albumList, setAlbumList] = React.useState([]);
    //run this once at the start
    React.useEffect(() => {
        axios.get('/api/albums').then(res => setAlbumList(res.data));
    }, []);

    //selected album state for single view
    const [selectedAlbum, setSelectedAlbum] = React.useState({});
    //click handler, expects id of clicked album, sets selected to that album
    function clickAlbum(albumID) {
        axios
            .get(`/api/albums/${albumID}`)
            .then(res => setSelectedAlbum(res.data));
    }
    function seeAllAlbums() {
        setSelectedAlbum({});
    }

    return (
        <div id="main" className="row container">
            <Sidebar goBack={seeAllAlbums} />
            <div className="container">
                {!selectedAlbum.id ? (
                    <AllAlbums albumList={albumList} clickAlbum={clickAlbum} />
                ) : (
                    <SingleAlbum album={selectedAlbum} />
                )}
            </div>
            <Player />
        </div>
    );
};

export default Main;
