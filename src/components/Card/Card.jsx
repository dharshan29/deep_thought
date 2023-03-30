import React from "react";
import "./index.css";

const Card = ({ heading, description, content, type }) => {
	return (
		<div className="card">
			<div className="head">
				<h4>{heading}</h4>
				<div className="detail">
					<h4>i</h4>
				</div>
			</div>
			<div className="body">
				<div className="card_description">
					<p>
						<strong>Description: </strong>
						{description}
					</p>
				</div>
				<div className="card_content">
					<iframe
						width="100%"
						height={type === "video" ? "291px" : "100%"}
						title="content"
						src={content}
						srcDoc={content === " " && "<h1>No content to display</h1>"}
						name="content"
						allowTransparency="true"
						frameborder="0"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Card;
