import React from "react";
import "./index.css";
import { Meeting, Question, Schedule } from "../../assets";

const data = [{ name: Question }, { name: Meeting }, { name: Schedule }];
const FloatingButtons = () => {
	return (
		<div className="button">
			{data.map((item, index) => (
				<button key={index}>
					<img src={item.name} alt={item.name} />
				</button>
			))}
		</div>
	);
};

export default FloatingButtons;
