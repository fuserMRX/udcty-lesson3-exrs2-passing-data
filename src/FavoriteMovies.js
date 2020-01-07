import React, { Component } from 'react';

class FavoriteMovieList extends Component {
    render() {
        const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;
        return (
            <div>
                {Object.values(movies).map((movie) => {
                    let profilesMoviesIDs = profiles.filter((profile) => +profile.favoriteMovieID === movie.id);
                    let movieName = <h2>{movie.name}</h2>;

                    let sortUsers = profilesMoviesIDs.map(profile => {
                        let user = users[profile.userID].name;
                        return <li key={profile.userID}>{user}</li>
                    });
                    return <React.Fragment key={movie.id}>
                        {movieName}
                        {sortUsers.length > 0 &&
                            <React.Fragment>
                          		<p>Liked By:</p>
                                <ul>{sortUsers}</ul>
                            </React.Fragment>
                        }
                        {sortUsers.length === 0 && <p>None of the current users liked this movie</p>}
                    	</React.Fragment>;
                })}
            </div>
        )
    }
}

export default FavoriteMovieList;