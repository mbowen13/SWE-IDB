import React from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import MenuItem from "material-ui/MenuItem";

const linkStyle = {
	textDecoration: "none",
	color: "inherit",
};

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	handleToggle = () => this.setState({ open: !this.state.open });

	handleClose = () => this.setState({ open: false });

	render() {
		return (
			<div>
				<AppBar
					title={
						<Link style={linkStyle} to="/">
							Playlistr
						</Link>
					}
					onLeftIconButtonTouchTap={this.handleToggle}
				/>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={open => this.setState({ open })}
				>
					<Link style={linkStyle} to="/about">
						<MenuItem onClick={this.handleClose}>About</MenuItem>
					</Link>
					<Divider />
					<Link style={linkStyle} to="/albums">
						<MenuItem onClick={this.handleClose}>Albums</MenuItem>
					</Link>
					<Divider />
					<Link style={linkStyle} to="/artists">
						<MenuItem onClick={this.handleClose}>Artists</MenuItem>
					</Link>
					<Divider />
					<Link style={linkStyle} to="/tracks">
						<MenuItem onClick={this.handleClose}>Tracks</MenuItem>
					</Link>
					<Divider />
					<Link style={linkStyle} to="/playlists">
						<MenuItem onClick={this.handleClose}>Playlists</MenuItem>
					</Link>
				</Drawer>
			</div>
		);
	}
}
