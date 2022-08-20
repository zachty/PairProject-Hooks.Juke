import React from 'react';
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';
import Player from './components/Player';
import axios from 'axios';

const Main = () => {
    //album list for *****all albums***** view
    const [albumList, setAlbumList] = React.useState([]);
    //run this once at the start
    React.useEffect(() => {
        axios.get('/api/albums').then(res => setAlbumList(res.data));
    }, []);

    //selected album state for *****single view*****
    const [selectedAlbum, setSelectedAlbum] = React.useState({});
    //click handler, expects id of clicked album, sets selected to that album
    function clickAlbum(albumID) {
        axios
            .get(`/api/albums/${albumID}`)
            .then(res => setSelectedAlbum(res.data));
    }
    //handle going back when user clicks on 'albums' in sidebar
    function seeAllAlbums() {
        setSelectedAlbum({});
    }

    //play music from *****single album view*****
    const [currentSong, setCurrentSong] = React.useState({});
    //handle clicking song
    function handleClickSong(song) {
        setPlaying(!playing);
        setCurrentSong(song);
        const audio = document.getElementById('audioPlayer');
        //would probably need an if statement here to check if we are clicking on a new song or the old songs play/pause button
        audio.pause();
        audio.src = song.audioUrl;
        audio.load();
        audio.play();
    }

    //handle the *****FOOTER***** events
    const [playing, setPlaying] = React.useState(false);
    function handlePlayPause() {
        const audio = document.getElementById('audioPlayer');
        setPlaying(!playing);
        playing ? audio.play() : audio.pause();
    }
    function handleNextLast(num) {
        //TODO: refactor this funky logic
        const songArray = selectedAlbum.songs;
        const songIndex = songArray.indexOf(currentSong);
        if (songIndex === 0 && num === -1)
            setCurrentSong(songArray[songArray.length + num]);
        else if (songIndex === songArray.length - 1 && num === 1)
            setCurrentSong(songArray[0]);
        else setCurrentSong(songArray[songIndex + num]);
    }

    return (
        <div id="main" className="row container">
            <Sidebar goBack={seeAllAlbums} />
            <div className="container">
                {!selectedAlbum.id ? (
                    <AllAlbums albumList={albumList} clickAlbum={clickAlbum} />
                ) : (
                    <SingleAlbum
                        album={selectedAlbum}
                        currentSong={currentSong}
                        clickPlay={handleClickSong}
                        playing={playing}
                    />
                )}
            </div>
            <audio id="audioPlayer"></audio>
            {currentSong.id ? (
                <Player
                    currentSong={currentSong}
                    playing={playing}
                    clickPlayPause={handlePlayPause}
                    clickNextLast={handleNextLast}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Main;
