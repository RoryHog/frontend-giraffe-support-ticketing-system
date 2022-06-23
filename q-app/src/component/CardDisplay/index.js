import React from "react";
import Timer from "../Timer";
import Button from "../Button/";



function acceptQuery(event) {
	console.log(event.currentTarget.id);

}

function CardDisplay(props) {
	const array = props.array;

	if (array[array.length-1] === undefined) {
		return <div>Loading...</div>;
	}

	if (array[array.length - 1]) {
		return (
			<div>
				{array
					.filter((object) => object.status === "waiting")
					.map((filteredArray) => (
						<div key={filteredArray.ticket_id}>
							<p>{filteredArray.ticket_id}</p>
							<div className="flex-container">
								<div className="clockIcon"></div>
								<Timer />
								<p>{filteredArray.name}</p>
								<p>Room: {filteredArray.roomnumber}</p>
								<p>Question: {filteredArray.message}</p>
								<Button
									buttonText={"Accept"}
									handleClick={acceptQuery}
									id={filteredArray.ticket_id}
								></Button>
								<div>
									<p>{filteredArray.keywords}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}
}

export default CardDisplay;
