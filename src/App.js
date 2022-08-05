import './App.css';
import Player from "./components/player";
import CustomizedTables from "./components/ListMusic";
import {Songs} from "./Context"
import DataSongs from "./data/songs.json"
import {useState} from "react";

function App() {
    const [song, setSong] = useState(DataSongs);
    
    const handleSetSong = (idSong) =>{
        const song = DataSongs.filter(song => song.id === idSong);
        if(song === []){
            setSong(DataSongs[0]);
        }else{
            setSong(song)
        }
    }
    console.log(song)
  return (
    <div className="container" style={{position: 'relative'}} >
        <Songs.Provider value={{DataSongs, song, handleSetSong}}>
            <CustomizedTables />
            <Player />
        </Songs.Provider>
    </div>
  );
}

export default App;
