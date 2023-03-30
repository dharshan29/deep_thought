import React from "react";
import { Avatar, Dot, Home, logo, Notification, Setting } from "../../assets";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<img src={logo} alt="logo" />
			<div className="icons">
				<img src={Home} alt="" />
				<img src={Setting} alt="" />
				<img src={Notification} alt="" />
				<img src={Avatar} alt="" />
				<div className="dot">
					<img src={Dot} alt="" />
					<img src={Dot} alt="" />
					<img src={Dot} alt="" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
