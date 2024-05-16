"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FetchGrid.module.css"

const FetchGrid = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleFetchData = async () => {
      try {
        const response = await axios.get(
          "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json"
        );
        const data = response.data.topalbums.album;
        setAlbums(data);
        setLoading(false);
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchData();
  }, []);

  return (
    <div className={styles["Fetching"]}>
    <p className={styles["title"]}>Fetching data</p>
      {loading && <p>Fetching data</p>}
      {!loading &&
        albums.map((album, index) => <p className={styles["albums-style"]} key={index}>{album.name}</p>)}
    </div>
  );
};

export default FetchGrid;