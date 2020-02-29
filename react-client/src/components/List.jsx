import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {
  let MovieListComponent = props.movies.map( (movie) => {
    return (
      <ListItem
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
        genres={movie.genres}
        />
    )
  })

  return (
    <div>
      {MovieListComponent}
    </div>
  )
};

export default List;