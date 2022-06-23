import React from "react";
import Timer from "../Timer";
import Button from "../Button/";



function acceptQuery(event) {
	console.log(event.currentTarget.id);
	const id = event.currentTarget.id;
	fetch(`/tickets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "in progress" }),
  })
    .then((res) => res.json)
    .then((data) => console.log(data))
}


function CardDisplay(props, handleClick) {
	const array = props.array;

	if (array === undefined) { //(array[array.length-1] === undefined)
    return <div>Loading...</div>;
  }

	if (array) { //(array[array.length - 1])
    return (
      <div>
      <div className="pd-top"></div>
        {array
          .filter((object) => object.status === "waiting")
          .map((filteredArray) => (
            <div key={filteredArray.ticket_id}>
              <p className="small-grey">{filteredArray.ticket_id}</p>
              <div className="flex-container">
                <Timer />
                <p>{filteredArray.name}</p>
                <p>Room: {filteredArray.roomnumber}</p>
                <p>Question: {filteredArray.message}</p>
                <Button
                  buttonText={"Accept"}
                  handleClick={acceptQuery}
						  id={filteredArray.ticket_id}
					  handleClick={handleClick}></Button>
                <div className="keyword-style">
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
