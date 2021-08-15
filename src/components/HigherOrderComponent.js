import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useData } from '../context_reducer/Context';

const HigherOrderComponent = (OriginalComponent, movieApi) => {
    const NewComponent = () => {
        const [series, setSeries] = useState([])

        const { setData } = useData()


        const getOriginalMovie = async () => {
            const response = await axios.get(movieApi)
            const result = await response.data.results

            console.log(result)
            setSeries(result)
        }

        useEffect(() => {
            getOriginalMovie()
        }, [])

        return (
            <OriginalComponent _series={series} _setData={setData} />
        );
    }
    return NewComponent;
};

export default HigherOrderComponent;
