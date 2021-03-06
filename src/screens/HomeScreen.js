import React from 'react';
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className= "homeScreen">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        </div>
    )
}

export default HomeScreen
