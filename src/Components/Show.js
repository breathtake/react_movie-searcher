import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';
import Poster from './Poster';
import genres from '../genres';

const Show = props => {
  const data = props.data;
  const state = React.useContext(Context);

  const Genres = () => (
    <div className="genres">
      <span>Genres:</span>
      {data.genre_ids.map(id => (
        <li key={id}>{genres[id]}</li>
      ))}
    </div>
  );

  const handleClick = () =>
    state.setDetails({ id: data.id, media_type: data.media_type });

  return (
    <div className="card">
      <Link onClick={handleClick} to={`/details/`}>
        <Poster data={data} />
      </Link>
      <div className="description">
        <span>{data.media_type}</span>
        <p>{data.overview}</p>
      </div>
      <span className="date">{data.release_date || data.first_air_date}</span>
      <div className="additional_info">
        <Genres />
        <span>Rating: {data.vote_average}</span>
      </div>
    </div>
  );
};

export default Show;
