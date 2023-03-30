import React from "react";
import { Close } from "../../assets";
import "./index.css";

const NoticeBoard = () => {
	return (
		<div className="board">
			<div className="column">
				<img src={Close} alt="" />
				{"Notice Board".split("").map((element) => (
					<h5>{element === " " ? <br></br> : element}</h5>
				))}
			</div>
		</div>
	);
};

export default NoticeBoard;
