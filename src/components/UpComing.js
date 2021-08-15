import React from 'react';
import AllMoviesData from './AllMoviesData';
import './HomePage.css';
import Home from './Home';
import { Link } from 'react-router-dom';
import HigherOrderComponent from './HigherOrderComponent';


const UpComing = ({ _series, _setData }) => {

    return (
        <>
            <Home />
            <div className="homepage-div">
                <h2>UPCOMING SERIES</h2>
                <div className="movie-data-div">
                    {
                        _series.map((item) => <Link to="/movie-detail" key={item.id}> <img onClick={() => _setData(item)} src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="not found" className="original-img" /> </Link>)
                    }

                </div>
            </div>
        </>
    );
};

export default HigherOrderComponent(UpComing, AllMoviesData.upcoming);
