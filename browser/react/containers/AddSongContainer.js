'use strict';

import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = Object.assign({
			songId: 1,
			error: false
		}, store.getState().playlists);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {

		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState().playlists);
		});

		store.dispatch(loadAllSongs());

	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	handleChange(evt) {
		this.setState({
			songId: evt.target.value,
			error: false
		});
	}

	handleSubmit(evt) {

		evt.preventDefault();

		const playlistId = this.state.selected.id;
		const songId = this.state.songId;

		store.dispatch(addSongToPlaylist(playlistId, songId));

	}

	render() {

		const songs = this.state.songs;
		const error = this.state.error;

		return (
			<AddSong
				{...this.props}
				songs={songs}
				error={error}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}/>
		);
	}
}

export default AddSongContainer;
