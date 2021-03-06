import React from 'react';
import {Link} from 'react-router';

export default props => {

  const artists = props.artists;

  return (
    <div>
      <h3>Artists</h3>
      <div className="list-group">
        {
          artists.map(artist => {
            console.log(artist);
            return (
              <div className="list-group-item" key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
