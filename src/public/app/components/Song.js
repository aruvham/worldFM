import React from 'react';

const Song = ({ size, track, onClick, ranking, currentSong, showTrackInfo, songMenu, openSongMenu, closeSongMenu }) => {

  const borderWidth = 3; // px
  const netSize = size - borderWidth;
  const icon = currentSong.isPlaying && track.track_preview_url === currentSong.src ? 'fa-pause-circle-o' : 'fa-play-circle-o';
  const toggleSongMenu = () => {
    if (ranking === songMenu) {
      closeSongMenu();
    } else {
      openSongMenu(ranking);
    }
  }
  return (
    <div
      className={`Song ${ranking === songMenu ? 'Song--green-border' : ''}`}

      style={{
        backgroundImage: `url(${track.track_album_image})`,
        width: netSize,
        height: netSize,
      }}
    >

      <div className="Song__wrapper">
        { ranking === songMenu &&
        <div className="Song__more-info-wrapper">
          <div className="Song__more-info">
            <div className="Song__more-info-option">
              <i className="fa fa-plus fa-lg fa-fw" />
              <span>Add Track</span>
            </div>
            <div className="Song__more-info-option">
              <i className="fa fa-info-circle fa-lg fa-fw" />
              <span>Album</span>
            </div>
            <div className="Song__more-info-option">
              <i className="fa fa-user-circle fa-lg fa-fw" />
              <span>Artist</span>
            </div>
            <div className="Song__more-info-option">
              <i className="fa fa-share-alt fa-lg fa-fw" />
              <span>Share Track</span>
            </div>
            <div className="Song__more-info-option">
              <i className="fa fa-music fa-lg fa-fw" />
              <span>More Like This</span>
            </div>
          </div>
        </div>
        }

        { showTrackInfo &&
        <div
          className="Song__container"
          style={{ opacity:  showTrackInfo ? 1 : 0 }}
        >
          <span className="Song__ranking">{ranking < 10 ? `0${ranking}` : ranking}</span>
          <div className="Song__info">
            <span className="Song__name">{track.track_name}</span>
            <span className="Song__artist">{JSON.parse(track.track_artist_name).join(', ')}</span>
          </div>
          <span className="Song__expand">
            <i
              className={`fa fa-chevron-circle-${songMenu === ranking ? 'down' : 'up'} fa-2x fa-fw`}
              onClick={toggleSongMenu}
            />
          </span>
        </div>
        }

      </div>

      {ranking !== songMenu &&
      <div
        className="SongHover"
        style={{ bottom: netSize - (2 * borderWidth) }}
      >
        <i
          className={`SongHover__play-button fa ${icon} fa-5x fa-fw`}
          onClick={() => onClick(track.track_preview_url)}
        />
      </div>
      }
    </div>
  );
};
export default Song;