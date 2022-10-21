import React, { useEffect, useState } from 'react'

import { RowType } from '../../types'
import { getRequest, IMG_BASE_URL } from '../../helper'
import "./row.css"

const Row: React.FC<RowType> = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState<Array<any>>([])

    useEffect(() => {

        const fetchData = async () => {
            var res = await getRequest(fetchUrl)
            setMovies(res.data?.results)
        }

        fetchData()

    }, [fetchUrl])



    return (
        <div className='row'>
            <h2 className='row_title'>{title}</h2>

            <div className="row_posters">
                {movies?.map((movie: any) =>
                ((isLargeRow && movie?.poster_path) || 
                 (!isLargeRow && movie?.backdrop_path)) && (
                    <img 
                        key={movie?.id} 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src={`${IMG_BASE_URL}${
                            isLargeRow ? movie?.poster_path : movie?.backdrop_path
                        }`} 
                        alt={movie?.name} 
                    />
                )
                )}
            </div>
        </div>
    )
}

export default Row