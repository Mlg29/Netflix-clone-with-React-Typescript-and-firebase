import React from 'react'
import './index.css'

function Banner() {

    const truncate = (data: string, n: number) => {
        return data?.length > n ? data?.substr(0, n-1) + '...' : data
    }
  return (
    <header className='banner' style={{backgroundSize: 'cover',backgroundPosition: 'center',backgroundImage: `url('https://wallpapercave.com/wp/wp8741529.jpg')`}}>
        <div className="banner_contents">
            <h1 className="banner_title">
                Movie Name
            </h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">
                {truncate("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 150)}
            </h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner