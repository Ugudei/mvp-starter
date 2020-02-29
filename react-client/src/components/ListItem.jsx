import React from 'react';

const ListItem = (props) => (
  <div>
    { props.movies.title }
    { props.movies.release_date }
    { props.movies.overview }
    { props.movies.genres }
    { props.movies.poster_path }

  </div>
)

export default ListItem;