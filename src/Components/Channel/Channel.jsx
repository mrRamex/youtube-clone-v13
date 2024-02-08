import React, { useState } from "react";
import "./Channel.scss";
import "./Videos.scss";
import Banner from "../../images/thumbnail/thumbnail2.jpg";
import { PiFilmReel } from "react-icons/pi";
import { videos1, shortsContainer, videos2 } from "./Video_container";
import { Videos } from "./Videos_container";
import { Shorts } from "./Short_container";

const Channel = () => {
  const [home, setHome] = useState(true);
  const [videos, setVideos] = useState(false);
  const [shorts, setShorts] = useState(false);
  const [playlists, setPlaylists] = useState(false);
  const [community, setCommunity] = useState(false);

  const channelContentDisplay = (type) => {
    if (type === "home") {
      setHome(true);
      setVideos(false);
      setShorts(false);
      setPlaylists(false);
      setCommunity(false);
    } else if (type === "videos") {
      setHome(false);
      setVideos(true);
      setShorts(false);
      setPlaylists(false);
      setCommunity(false);
    } else if (type === "shorts") {
      setHome(false);
      setVideos(false);
      setShorts(true);
      setPlaylists(false);
      setCommunity(false);
    } else if (type === "playlists") {
      setHome(false);
      setVideos(false);
      setShorts(false);
      setPlaylists(true);
      setCommunity(false);
    } else if (type === "community") {
      setHome(false);
      setVideos(false);
      setShorts(false);
      setPlaylists(false);
      setCommunity(true);
    }
  };

  return (
    <div className="channel">
      <div className="channel-header">
        <img className="channel-banner" src={Banner} alt="Channel Banner" />
        <div className="channel-credentials">
          <div className="channel-icon"></div>
          <div className="credentials">
            <h1>Username</h1>
            <div className="stats">
              <p>Usertag</p> -<p>Subscriber amount</p> -<p>Videos amount</p>
            </div>
            <p>More about this channel</p>
            <div className="options">
              <button>Customize channel</button>
              <button>Manage videos</button>
            </div>
          </div>
        </div>
      </div>

      <div className="channel-menu">
        <button onClick={() => channelContentDisplay("home")}>Home</button>
        <button onClick={() => channelContentDisplay("videos")}>Videos</button>
        <button onClick={() => channelContentDisplay("shorts")}>Shorts</button>
        <button onClick={() => channelContentDisplay("playlists")}>
          Playlists
        </button>
        <button onClick={() => channelContentDisplay("community")}>
          Community
        </button>
      </div>

      <div className="line"></div>

      {home ? (
        <>
          <div className="for-you">
            <h2>For You</h2>
            <div className="video-container">
              {videos1.map((video) => (
                <div className="video" id={video.id}>
                  <img src={Banner} alt="Video thumbnail" />
                  <div className="video-credentials">
                    <p>{video.title}</p>
                    <div className="video-stats">
                      <p>
                        {video.views} - {video.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="small-line"></div>

          <div className="for-you">
            <h2>
              <PiFilmReel /> Shorts
            </h2>
            <div className="video-container">
              {shortsContainer.map((short) => (
                <div className="video" id={short.id}>
                  <img
                    src={Banner}
                    alt="Video thumbnail"
                    className="short-video"
                  />
                  <div className="video-credentials">
                    <p>{short.title}</p>
                    <div className="video-stats">
                      <p>
                        {short.views} - {short.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="small-line"></div>

          <div className="for-you">
            <h2>Videos</h2>
            <div className="video-container">
              {videos2.map((video) => (
                <div className="video" id={video.id}>
                  <img src={Banner} alt="Video thumbnail" />
                  <div className="video-credentials">
                    <p>{video.title}</p>
                    <div className="video-stats">
                      <p>
                        {video.views} - {video.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="small-line"></div>
        </>
      ) : (
        <></>
      )}

      {videos ? (
        <>
          <div className="videos">
            <div className="videos-btns">
              <button>Latest</button>
              <button>Popular</button>
              <button>Oldest</button>
            </div>

            <div className="video-container">
              {Videos.map((video) => (
                <div className="video" id={video.id}>
                  <img src={Banner} alt="Video thumbnail" />
                  <div className="video-credentials">
                    <p>{video.title}</p>
                    <div className="video-stats">
                      <p>
                        {video.views} - {video.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {shorts ? (
        <>
          <div className="videos">
            <div className="videos-btns">
              <button>Latest</button>
              <button>Popular</button>
            </div>

            <div className="short-container">
              {Shorts.map((video) => (
                <div className="video" id={video.id}>
                  <img
                    src={Banner}
                    alt="Video thumbnail"
                    className="short-thumbnail"
                  />
                  <div className="video-credentials">
                    <p>{video.title}</p>
                    <div className="video-stats">
                      <p>
                        {video.views} - {video.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {playlists ? <></> : <></>}

      {community ? <></> : <></>}
    </div>
  );
};

export default Channel;
