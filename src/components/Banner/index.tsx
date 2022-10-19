import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useAppDispatch } from '../../app/hooks'
import { IMG_BASE_URL } from '../../helper'
import requests from '../../helper/request'
import { fetchMovie } from '../../slice/movieSlice'
import './index.css'

function Banner() {
    const [movie, setMovie] = useState<any>()
    const dispatch = useAppDispatch()


    useEffect(() => {
       dispatch(fetchMovie()).then(d => {
        var data = d?.payload?.results
        setMovie(
            data[Math.floor(Math.random() * data?.length - 1)]
        )
       })
    }, [])

    const truncate = (data: string, n: number) => {
        return data?.length > n ? data?.substr(0, n-1) + '...' : data
    }
  return (
    <header className='banner' 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${IMG_BASE_URL}${movie?.backdrop_path}")`
            }}
        >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.name || movie?.title || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
            </h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner