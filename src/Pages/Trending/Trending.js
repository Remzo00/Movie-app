import React, { useState, useEffect } from "react";
import axios from 'axios';
import SingleContent from "../../Components/SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../../Components/Pagination/CustomPagination";

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([])

    const fetchingTrending = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/week?api_key=b84cfeb067484b50f77dd635900eda7e&page=${page}`)
        setContent(data.results)
    }

    useEffect(() => {
        fetchingTrending()
    }, [page])

    return(
        <div>
            <span className="pageTitle">Trending today</span>
            <div className="trending">
                {content && content.map((c) => <SingleContent
                 key={c.id}
                 id={c.id}
                 poster={c.poster_path}
                 title={c.title || c.name}
                 data={c.first_air_date || c.release_date}
                 media_type={c.media_type}
                 vote_average={c.vote_average}
                 />)}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending