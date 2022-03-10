import axios from "axios";
import React, { useEffect } from "react";
import { Chip } from "@material-ui/core";

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=b84cfeb067484b50f77dd635900eda7e&language=en-US`)
        
        setGenres(data.genres)
    }

    console.log(genres)

    useEffect(() => {
        fetchGenres()
        return () => {
            setGenres({}); // unmounting
          };
    }, [])

    return(
        <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
    )
}

export default Genres