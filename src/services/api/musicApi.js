import axios from "axios";
import * as modelTransformers from "../modelTransformers";

const api_host = "api.hackappellas.me";

export function getAlbums(page = 1) {
	return axios.get(`http://${api_host}/albums/?page=${page}`).then(response => {
		return {
			itemsPerPage: response.data.per_page,
			currentPage: response.data.page,
			nextPage: response.data.next,
			prevPage: response.data.prev,
			totalPages: response.data.pages,
			data: response.data.albums.map(album => modelTransformers.albumTransformer(album)),
		};
	});
}

export function getArtists(page = 1) {
	return axios.get(`http://${api_host}/artists/?page=${page}`).then(response => {
		return {
			itemsPerPage: response.data.per_page,
			currentPage: response.data.page,
			nextPage: response.data.next,
			prevPage: response.data.prev,
			totalPages: response.data.pages,
			data: response.data.artists.map(artist => modelTransformers.artistTransformer(artist)),
		};
	});
}

export function getPlaylists(page = 1) {
	return axios.get(`http://${api_host}/playlists/?page=${page}`).then(response => {
		return {
			itemsPerPage: response.data.per_page,
			currentPage: response.data.page,
			nextPage: response.data.next,
			prevPage: response.data.prev,
			totalPages: response.data.pages,
			data: response.data.playlists.map(playlist =>
				modelTransformers.playlistTransformer(playlist)
			),
		};
	});
}

export function getTracks(page = 1) {
	return axios.get(`http://${api_host}/tracks/?page=${page}`).then(response => {
		return {
			itemsPerPage: response.data.per_page,
			currentPage: response.data.page,
			nextPage: response.data.next,
			prevPage: response.data.prev,
			totalPages: response.data.pages,
			data: response.data.tracks.map(track => modelTransformers.trackTransformer(track)),
		};
	});
}

export function getAlbumDetails(albumId) {
	return axios.get(`http://` + api_host + `/albums/${albumId}`).then(response => response.data);
}

export function getArtistDetails(artistId) {
	return axios.get(`http://` + api_host + `/artists/${artistId}`).then(response => response.data);
}

export function getPlaylistDetails(playlistId) {
	return axios
		.get(`http://` + api_host + `/playlists/${playlistId}`)
		.then(response => response.data);
}

export function getTrackDetails(trackId) {
	return axios.get(`http://` + api_host + `/tracks/${trackId}`).then(response => response.data);
}
