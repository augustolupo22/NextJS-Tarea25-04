'use client'

import { useEffect } from "react"
import axios from "axios"
import styles from "./FetchGrid.module.css"

const FetchGrid = () => {
    useEffect(() => {
        const handleFetchData = async () => {
            const response = await axios.get ("https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json")
            
            const data = response.data.topalbums.album;
            console.log(data)
        }

        handleFetchData()
    }, [])

    return (
        <div className={styles["container"]}>
            <h1 className={styles["title"]}>Fetching data</h1>
        </div>
    )
}

export default FetchGrid