import React, { useEffect, useState } from "react";
import "./index.css";
import { data } from "../../data/data";
import Card from "../Card/Card";

const MainScreen = () => {
	const [task, setTask] = useState();

	useEffect(() => {
		setTask(data.tasks[0]);
	}, []);

	console.log(task);

	return (
		<div className="container">
			<div className="heading">
				<h2>Technical Project Management</h2>
				<button>Submit task</button>
			</div>
			<div className="description">
				<h4>{task?.task_title}</h4>
				<p>{task?.task_description}</p>
			</div>
			<div className="cards">
				{task?.assets.map((item) => (
					<Card
						key={item.asset_id}
						heading={item.asset_title}
						description={item.asset_description}
						content={item.asset_content}
						type={item.asset_content_type}
					/>
				))}
			</div>
		</div>
	);
};

export default MainScreen;
