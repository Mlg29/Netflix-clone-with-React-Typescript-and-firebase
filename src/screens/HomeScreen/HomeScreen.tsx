import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Row from '../../components/Row/row'
import requests from '../../helper/request'
import './index.css'

function HomeScreen() {
  return (
    <div>
      <Navbar />

      <Banner />

      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests?.fetchNetflixOriginals}
        isLargeRow
      />
       <Row 
        title='Trending Now'
        fetchUrl={requests?.fetchTrending}
      />
       <Row 
        title='Top Rated'
        fetchUrl={requests?.fetchTopRated}
      />
       <Row 
        title='Action Movies'
        fetchUrl={requests?.fetchActionMovies}
      />
       <Row 
        title='Comedy Movies'
        fetchUrl={requests?.fetchComedyMovie}
      />
       <Row 
        title='Horror Movies'
        fetchUrl={requests?.fetchHorrowMovies}
      />
       <Row 
        title='Romance Movies'
        fetchUrl={requests?.fetchRomanceMovies}
      />
       <Row 
        title='Documentaries'
        fetchUrl={requests?.fetchDocumentaries}
      />

    </div>
  )
}

export default HomeScreen