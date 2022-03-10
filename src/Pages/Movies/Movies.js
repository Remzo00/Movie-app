import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres/Genres";
import useGenre from "../../Hooks/useGenre";

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
         const { data } = await axios.get(`
          https://api.themoviedb.org/3/discover/movie?api_key=b84cfeb067484b50f77dd635900eda7e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`)
        setContent(data.results)
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies()
    }, [page, genreforURL])

    return(
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
                type='movie'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {content && content.map((c) => (
                <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
                 />
                ))}
            </div>
            {numOfPages > 1 &&(
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}            
        </div>
    )
}

export default Movies