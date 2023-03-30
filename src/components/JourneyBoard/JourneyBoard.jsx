import React, { useState } from "react";
import { Arrow } from "../../assets";
import "./index.css";

const JourneyBoard = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={`box ${open ? "box-open" : "box-close"}`}>
			<div className="header">
				{open && <h4>Journey Board</h4>}
				<button onClick={() => setOpen(!open)} className={open && "arrow"}>
					<img src={Arrow} alt="arrow" />
				</button>
			</div>
			<div className="content">
				{open ? (
					<ul>
						<li>
							<strong>Explore the world of management</strong>
						</li>
						<li>Technical Project Management</li>
						<li>Threadbuild</li>
						<li>Structure your pointers</li>
						<li>4SA Method</li>
					</ul>
				) : (
					<div className="number">
						<h2>1</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default JourneyBoard;
